export default class UIController {
	constructor(game) {
		this.game = game;

		this.playerBoardEl = document.querySelector("#player-board");
		this.enemyBoardEl = document.querySelector("#enemy-board");

		this.handleEnemyBoardClick = this.handleEnemyBoardClick.bind(this);

		this.enemyBoardEl.addEventListener("click", this.handleEnemyBoardClick);
	}

	render() {
		this.renderBoard(this.game.player1.board, this.playerBoardEl, false);
		this.renderBoard(this.game.player2.board, this.enemyBoardEl, true);
		this.updateTurnIndicator();
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

				if (cell.revealed) {
					if (cell.ship) {
						div.classList.add("hit");
						if (cell.ship.isSunk()) {
							div.classList.add("sunk");
						}
					} else {
						div.classList.add("miss");
					}
				}

				if (
					isEnemy &&
					this.game.currentPlayer.type === "human" &&
					!cell.revealed
				) {
					div.classList.add("hoverable");
				}

				div.dataset.x = x;
				div.dataset.y = y;

				container.appendChild(div);
			});
		});
	}

	async handleEnemyBoardClick(e) {
		if (this.game.gameOver) return;

		const cell = e.target;
		if (!cell.classList.contains("cell")) return;

		const x = Number(cell.dataset.x);
		const y = Number(cell.dataset.y);

		let result = this.game.playTurn(x, y);

		if (result.status === "invalid") return;

		this.render();

		if (result.winner) {
			this.showWinner(result.winner.type);
			return;
		}

		while (this.game.isComputerTurn()) {
			await this.delay(1000);

			result = this.game.playComputerTurn();

			if (result.status === "invalid") continue;

			this.render();

			if (result.winner) {
				this.showWinner(result.winner.type);
				return;
			}
		}
	}

	updateTurnIndicator() {
		const indicator = document.querySelector("#turn-indicator");

		if (this.game.gameOver) {
			indicator.textContent = "Game Over";
			return;
		}

		indicator.textContent =
			this.game.currentPlayer.type === "human"
				? "Your turn"
				: "Computer thinking...";
	}

	delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	showWinner(type) {
		const banner = document.querySelector("#winner-banner");
		banner.textContent = `${type} wins!`;
		banner.classList.remove("hidden");
	}
}
