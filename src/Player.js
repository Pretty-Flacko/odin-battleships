import Gameboard from "./Gameboard.js";

export default class Player {
	constructor(type) {
		this.type = type;
		this.board = new Gameboard();
	}

	attack(enemyBoard, x, y) {
		return enemyBoard.receiveAttack(x, y);
	}
}
