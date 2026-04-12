export default class UIController {
	constructor(game) {
		this.game = game;

		this.playerBoardEl = document.querySelector("#player-board");
		this.enemyBoardEl = document.querySelector("#enemy-board");
	}

	render() {
		this.renderBoard(this.game.player1.board, this.playerBoardEl, false);
		this.renderBoard(this.game.player2.board, this.enemyBoardEl, true);

		this.addListeners();
	}

	renderBoard(board, container, isEnemy = false) {
		container.innerHTML = "";
		container.classList.add("board");

		board.grid.forEach((row, y) => {
			row.forEach((cell, x) => {
				const div = document.createElement("div");
				div.classList.add("cell");

				if (cell.ship && !isEnemy) {
					div.classList.add("ship");
				}

				if (cell.wasHit) {
					if (cell.ship) {
						div.classList.add("hit");
					} else {
						div.classList.add("miss");
					}
				}

				div.dataset.x = x;
				div.dataset.y = y;

				container.appendChild(div);
			});
		});
	}

	addListeners() {
		this.enemyBoardEl.addEventListener("click", (e) => {
			const cell = e.target;
			if (!cell.classList.contains("cell")) return;

			const x = Number(cell.dataset.x);
			const y = Number(cell.dataset.y);

			const result = this.game.playTurn(x, y);

			if (result === "invalid") {
				return;
			}

			this.update();

			if (result.winner) {
				alert(`${result.winner.type} wins!`);
			}
		});
	}

	update() {
		this.renderBoard(this.game.player1.board, this.playerBoardEl, false);
		this.renderBoard(this.game.player2.board, this.enemyBoardEl, true);
	}
}
