import Player from "./Player.js";
import Ship from "./Ship.js";

export default class GameController {
	constructor() {
		this.player1 = new Player("human");
		this.player2 = new Player("computer");

		this.gameOver = false;
		this.currentPlayer = this.player1;
	}

	switchTurn() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}

	playTurn(x, y) {
		if (this.gameOver) return;

		const enemy =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;

		const result = this.currentPlayer.attack(enemy.board, x, y);

		const winner = this.checkWinner();
		if (winner) {
			this.gameOver = true;
			return winner;
		}

		if (result === "miss") {
			this.switchTurn();
		}

		return result;
	}

	computerTurn() {
		if (this.gameOver) return;

		const enemy =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;

		const [x, y] = this.currentPlayer.getRandomAttackTarget();
		const result = this.currentPlayer.attack(enemy.board, x, y);

		const winner = this.checkWinner();
		if (winner) {
			this.gameOver = true;
			return winner;
		}

		if (result === "miss") {
			this.switchTurn();
		}

		return result;
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
