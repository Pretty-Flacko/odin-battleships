import Player from "./Player.js";
import Ship from "./Ship.js";

export default class GameController {
	constructor() {
		this.placementFleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

		this.phase = "idle";

		this.player1 = null;
		this.player2 = null;
		this.currentPlayer = null;
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
			mode: "hunt",
			targets: [],
			visited: new Set(),
			lastHit: null,
		};
	}

	/* =========================
	   PLACEMENT LOGIC
	========================= */

	autoPlaceShips(player, startFromIndex = 0) {
		const ships = this.placementFleet;

		for (let i = startFromIndex; i < ships.length; i++) {
			const length = ships[i];
			let placed = false;
			let attempts = 0;

			while (!placed && attempts < 100) {
				attempts++;
				const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

				const x = Math.floor(Math.random() * 10);
				const y = Math.floor(Math.random() * 10);

				const ship = new Ship(length);

				try {
					player.board.placeShip(ship, x, y, direction);
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

		const length = this.getNextShipLength();
		const ship = new Ship(length);

		try {
			this.player1.board.placeShip(ship, x, y, this.currentDirection);
			this.currentShipIndex++;

			if (this.isPlacementComplete()) {
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

	playComputerTurn() {
		const [x, y] = this.getComputerMove();

		const result = this.#resolveTurn(x, y);

		this.#updateAI(x, y, result.status, result.sunk);

		return result;
	}

	isComputerTurn() {
		return this.currentPlayer.type === "computer";
	}

	getComputerMove() {
		const state = this.aiState;

		if (state.mode === "target" && state.targets.length) {
			return state.targets.pop();
		}

		while (true) {
			const x = Math.floor(Math.random() * 10);
			const y = Math.floor(Math.random() * 10);

			const key = `${x},${y}`;

			if (!state.visited.has(key)) {
				return [x, y];
			}
		}
	}

	#updateAI(x, y, status, sunk) {
		const state = this.aiState;

		state.visited.add(`${x},${y}`);

		if (sunk) {
			state.mode = "hunt";
			state.targets = [];
			return;
		}

		if (status === "hit") {
			state.mode = "target";

			const neighbors = this.#getNeighbors(x, y);

			for (const [nx, ny] of neighbors) {
				const key = `${nx},${ny}`;
				if (!state.visited.has(key)) {
					state.targets.push([nx, ny]);
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
				winner,
			};
		}

		if (result.status === "miss") {
			this.#switchTurn();
		}

		return {
			status: result.status,
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
