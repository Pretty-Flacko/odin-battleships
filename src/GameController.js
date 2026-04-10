import Player from "./Player.js";

export default class GameController {
	constructor() {
		this.player1 = new Player("human");
		this.player2 = new Player("computer");

		this.currentPlayer = this.player1;
	}

	switchTurn() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}

	playTurn(x, y) {
		const enemy =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;

		const result = this.currentPlayer.attack(enemy.board, x, y);

		const winner = this.checkWinner();
		if (winner) return winner;

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
}
