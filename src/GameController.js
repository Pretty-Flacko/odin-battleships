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
				this.#tryStartBattle();
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

	#tryStartBattle() {
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
		const [x, y] = this.currentPlayer.getRandomAttackTarget();
		return this.#resolveTurn(x, y);
	}

	isComputerTurn() {
		return this.currentPlayer.type === "computer";
	}

	#resolveTurn(x, y) {
		const enemy =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;

		const status = this.currentPlayer.attack(enemy.board, x, y);

		const winner = this.#checkWinner();
		if (winner) {
			this.phase = "gameover";
			return {
				status,
				winner,
			};
		}

		if (status === "miss") {
			this.#switchTurn();
		}

		return {
			status,
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
