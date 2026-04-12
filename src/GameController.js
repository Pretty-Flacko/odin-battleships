import Player from "./Player.js";
import Ship from "./Ship.js";

export default class GameController {
	constructor() {
		this.player1 = new Player("human");
		this.player2 = new Player("computer");

		this.gameOver = false;
		this.currentPlayer = this.player1;

		this.placementMode = true;
		this.placementFleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
		this.currentShipIndex = 0;
		this.currentDirection = "horizontal";
	}

	getNextShipLength() {
		return this.placementFleet[this.currentShipIndex];
	}

	placeNextShip(x, y) {
		console.log("placeNextShip works");
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

	switchTurn() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}

	playTurn(x, y) {
		if (this.gameOver) {
			return {
				status: "invalid",
				winner: null,
			};
		}

		return this.resolveTurn(x, y);
	}

	playComputerTurn() {
		const [x, y] = this.currentPlayer.getRandomAttackTarget();
		return this.resolveTurn(x, y);
	}

	isComputerTurn() {
		return this.currentPlayer.type === "computer";
	}

	resolveTurn(x, y) {
		const enemy =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;

		const status = this.currentPlayer.attack(enemy.board, x, y);

		const winner = this.checkWinner();
		if (winner) {
			this.gameOver = true;
			return {
				status,
				winner,
			};
		}

		if (status === "miss") {
			this.switchTurn();
		}

		return {
			status,
			winner: null,
		};
	}

	checkWinner() {
		if (this.player1.board.allShipsSunk()) {
			return this.player2;
		}

		if (this.player2.board.allShipsSunk()) {
			return this.player1;
		}

		return null;
	}

	setupFleet(player) {
		player.board.placeShip(new Ship(4), 0, 0, "horizontal");
		player.board.placeShip(new Ship(3), 0, 2, "horizontal");
		player.board.placeShip(new Ship(3), 2, 4, "horizontal");
		player.board.placeShip(new Ship(2), 8, 0, "horizontal");
		player.board.placeShip(new Ship(2), 8, 9, "horizontal");
		player.board.placeShip(new Ship(2), 0, 6, "horizontal");
		player.board.placeShip(new Ship(1), 7, 6, "horizontal");
		player.board.placeShip(new Ship(1), 7, 4, "horizontal");
		player.board.placeShip(new Ship(1), 5, 6, "horizontal");
		player.board.placeShip(new Ship(1), 0, 9, "horizontal");
	}
}
