import Player from "./Player.js";
import Ship from "./Ship.js";

export default class GameController {
	constructor() {
		this.placementFleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

		this.phase = "idle";
	}

	startSetup() {
		this.player1 = new Player("human");
		this.player2 = new Player("computer");

		this.phase = "placement";

		this.currentShipIndex = 0;
		this.currentDirection = "horizontal";

		this.currentPlayer = this.player1;

		this.autoPlaceShips(this.player2);

		this.aiState = {
			huntMoves: this.#generateAllMoves(),
			mode: "hunt",
			originHit: null,
			lastHit: null,
			direction: null,
			directionStep: null,
		};
	}

	/* =========================
	   PLACEMENT LOGIC
	========================= */

	autoPlaceShips(player, startFromIndex = 0) {
		const ships = this.placementFleet;

		for (let i = startFromIndex; i < ships.length; i++) {
			let placed = false;

			for (let attempts = 0; attempts < 100 && !placed; attempts++) {
				const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
				const x = Math.floor(Math.random() * 10);
				const y = Math.floor(Math.random() * 10);

				try {
					player.board.placeShip(new Ship(ships[i]), x, y, direction);
					placed = true;
				} catch {}
			}

			if (!placed) {
				throw new Error("Failed to place ships");
			}
		}

		return { status: "ok" };
	}

	getNextShipLength() {
		return this.placementFleet[this.currentShipIndex];
	}

	placeNextShip(x, y) {
		if (this.phase !== "placement") return { status: "invalid" };

		try {
			const ship = new Ship(this.getNextShipLength());

			this.player1.board.placeShip(ship, x, y, this.currentDirection);
			this.currentShipIndex++;

			if (this.isPlacementComplete(this.player1)) {
				this.tryStartBattle();
			}

			return { status: "ok" };
		} catch (e) {
			return { status: "invalid", error: e.message };
		}
	}

	isPlacementComplete(player) {
		return player.board.ships.length >= this.placementFleet.length;
	}

	toggleDirection() {
		this.currentDirection =
			this.currentDirection === "horizontal" ? "vertical" : "horizontal";
	}

	/* =========================
	   BATTLE START
	========================= */

	tryStartBattle() {
		if (
			this.isPlacementComplete(this.player1) &&
			this.isPlacementComplete(this.player2)
		) {
			this.phase = "battle";
			this.currentPlayer = this.player1;
		}
	}

	/* =========================
	   TURN SYSTEM
	========================= */

	playTurn(x, y) {
		if (this.phase !== "battle") {
			return {
				status: "invalid",
				winner: null,
			};
		}

		return this.#resolveTurn(x, y);
	}

	/* =========================
	   AI LOGIC
	========================= */

	playComputerTurn() {
		let state = this.aiState;
		console.log("AI STATE", {
			mode: state.mode,
			direction: state.direction,
			directionStep: state.directionStep,
			originHit: state.originHit,
			lastHit: state.lastHit,
			neighbors: state.neighbors?.length,
		});

		const [x, y] = this.getComputerMove();

		console.log("AI PICK", x, y);

		const result = this.#resolveTurn(x, y);

		console.log("[AI RESULT]", {
			x,
			y,
			status: result.status,
			sunk: result.sunk,
		});

		this.#updateAI(x, y, result.status, result.sunk);

		console.log("[AI STATE AFTER]", JSON.parse(JSON.stringify(this.aiState)));

		return result;
	}

	isComputerTurn() {
		return this.currentPlayer.type === "computer";
	}

	getComputerMove() {
		const state = this.aiState;

		if (state.mode === "hunt") {
			return state.huntMoves.pop();
		}

		if (state.mode === "target") {
			if (state.direction) {
				return this.#getDirectionalMove();
			}

			const move = state.neighbors.pop();
			if (move) return move;
		}
	}

	#generateAllMoves() {
		const moves = [];

		for (let y = 0; y < 10; y++) {
			for (let x = 0; x < 10; x++) {
				moves.push([x, y]);
			}
		}

		for (let i = moves.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[moves[i], moves[j]] = [moves[j], moves[i]];
		}

		console.log(moves);
		return moves;
	}

	#getDirectionalMove() {
		const state = this.aiState;
		let x;
		let y;

		if (state.direction === "horizontal") {
			x = state.lastHit.x + state.directionStep;
			y = state.lastHit.y;
		} else {
			x = state.lastHit.x;
			y = state.lastHit.y + state.directionStep;
		}

		if (x < 0 || x >= 10 || y < 0 || y >= 10) {
			state.directionStep *= -1;
			state.lastHit = state.originHit;

			return this.#getDirectionalMove();
		}

		return [x, y];
	}

	#updateAI(x, y, status, sunk) {
		const state = this.aiState;

		if (sunk) {
			state.mode = "hunt";
			state.originHit = null;
			state.lastHit = null;
			return;
		}

		if (status === "hit") {
			state.lastHit = { x, y };

			//Already targeting, determine direction
			if (state.mode === "target" && !state.direction) {
				if (state.lastHit.x === state.originHit.x) {
					state.direction = "vertical";
					state.directionStep = state.lastHit.y > state.originHit.y ? 1 : -1;
				} else if (state.lastHit.y === state.originHit.y) {
					state.direction = "horizontal";
					state.directionStep = state.lastHit.x > state.originHit.x ? 1 : -1;
				}
			}

			//First hit, switch to target mode
			else if (state.mode === "hunt") {
				state.mode = "target";
				state.originHit = { x, y };
				state.direction = null;
				state.neighbors = this.#getNeighbors(x, y);
			}
		}

		if (status === "miss" || status === "invalid") {
			if (state.mode === "target") {
				if (state.direction) {
					state.lastHit = state.originHit;
					state.directionStep *= -1;
				}
			}
		}
	}

	#getNeighbors(x, y) {
		return [
			[x + 1, y],
			[x - 1, y],
			[x, y + 1],
			[x, y - 1],
		].filter(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10);
	}

	#resolveTurn(x, y) {
		const enemy =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;

		const result = this.currentPlayer.attack(enemy.board, x, y);

		const winner = this.#checkWinner();
		if (winner) {
			this.phase = "gameover";
			return {
				status: result.status,
				sunk: result.sunk,
				winner,
			};
		}

		if (result.status === "miss") {
			this.#switchTurn();
		}

		return {
			status: result.status,
			sunk: result.sunk,
			winner: null,
		};
	}

	#switchTurn() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}

	#checkWinner() {
		if (this.player1.board.allShipsSunk()) {
			return this.player2;
		}

		if (this.player2.board.allShipsSunk()) {
			return this.player1;
		}

		return null;
	}
}
