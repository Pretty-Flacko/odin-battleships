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
}
