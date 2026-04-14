import Player from "./Player.js";
import Ship from "./Ship.js";

export default class GameController {
	constructor() {
		this.placementFleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
	}

	startGame({ autoPlacePlayer = false } = {}) {
		this.player1 = new Player("human");
		this.player2 = new Player("computer");

		this.gameOver = false;
		this.currentPlayer = this.player1;

		this.placementMode = true;
		this.currentShipIndex = 0;
		this.currentDirection = "horizontal";

		this.autoPlaceShips(this.player2);

		if (autoPlacePlayer) {
			this.autoPlaceShips(this.player1);
			this.placementMode = false;
		}
	}

	autoPlaceShips(player) {
		const ships = this.placementFleet;

		for (const length of ships) {
			let placed = false;

			let attempts = 0;

			while (!placed && attempts < 100) {
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
	}

	getNextShipLength() {
		return this.placementFleet[this.currentShipIndex];
	}

	placeNextShip(x, y) {
		if (!this.placementMode) return { status: "invalid" };

		const length = this.getNextShipLength();
		const ship = new Ship(length);

		try {
			this.player1.board.placeShip(ship, x, y, this.currentDirection);
			this.currentShipIndex++;

			if (this.currentShipIndex >= this.placementFleet.length) {
				this.placementMode = false;
			}

			return { status: "ok" };
		} catch (e) {
			return { status: "invalid", error: e.message };
		}
	}

	toggleDirection() {
		this.currentDirection =
			this.currentDirection === "horizontal" ? "vertical" : "horizontal";
	}

	playTurn(x, y) {
		if (this.gameOver) {
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
			this.gameOver = true;
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
