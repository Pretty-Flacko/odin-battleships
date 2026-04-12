import Gameboard from "./Gameboard.js";

export default class Player {
	static TYPES = {
		HUMAN: "human",
		COMPUTER: "computer",
	};

	constructor(type) {
		if (!Object.values(Player.TYPES).includes(type)) {
			throw new Error(`Invalid player type: ${type}`);
		}

		this.type = type;
		this.board = new Gameboard();
	}

	attack(enemyBoard, x, y) {
		return enemyBoard.receiveAttack(x, y);
	}

	getRandomAttackTarget() {
		const x = Math.floor(Math.random() * this.board.size);
		const y = Math.floor(Math.random() * this.board.size);

		return [x, y];
	}
}
