export default class UIController {
	constructor(game) {
		this.game = game;

		this.hoverX = null;
		this.hoverY = null;
		this.previewCells = [];

		this.playerBoardEl = document.querySelector("#player-board");
		this.enemyBoardEl = document.querySelector("#enemy-board");

		this.handlePlayerBoardClick = this.handlePlayerBoardClick.bind(this);
		this.playerBoardEl.addEventListener("click", this.handlePlayerBoardClick);

		this.handleEnemyBoardClick = this.handleEnemyBoardClick.bind(this);
		this.enemyBoardEl.addEventListener("click", this.handleEnemyBoardClick);

		this.rotateBtn = document.querySelector("#rotate-btn");
		this.rotateBtn.addEventListener("click", () => this.game.toggleDirection());
		window.addEventListener("keydown", (e) => {
			if (e.key === "r") this.game.toggleDirection();
		});

		this.playerBoardEl.addEventListener("mousemove", (e) => {
			if (!this.game.placementMode) return;

			const cell = e.target.closest(".cell");
			if (!cell) return;

			const x = Number(cell.dataset.x);
			const y = Number(cell.dataset.y);

			if (x === this.hoverX && y === this.hoverY) return;

			this.hoverX = x;
			this.hoverY = y;

			this.render();
		});
	}

	render() {
		this.renderBoard(this.game.player1.board, this.playerBoardEl, false);
		this.renderBoard(this.game.player2.board, this.enemyBoardEl, true);
		this.updateTurnIndicator();
	}

	renderBoard(board, container, isEnemy = false) {
		container.innerHTML = "";
		container.classList.add("board");

		const preview = !isEnemy ? this.getPreviewCells() : [];

		board.grid.forEach((row, y) => {
			row.forEach((cell, x) => {
				const div = document.createElement("div");
				div.classList.add("cell");

				const key = `${x},${y}`;
				if (preview && preview.includes(key)) {
					div.classList.add("preview");
				}

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

	getPreviewCells() {
		if (this.hoverX === null || this.hoverY === null) return [];

		const length = this.game.getNextShipLength();
		const dir = this.game.currentDirection;

		const cells = [];

		for (let i = 0; i < length; i++) {
			const x = dir === "horizontal" ? this.hoverX + i : this.hoverX;
			const y = dir === "vertical" ? this.hoverY + i : this.hoverY;

			if (x >= 10 || y >= 10) return [];
			cells.push(`${x},${y}`);
		}

		return cells;
	}

	handlePlayerBoardClick(e) {
		if (!this.game.placementMode) return;

		const cell = e.target.closest(".cell");
		if (!cell) return;

		const x = Number(cell.dataset.x);
		const y = Number(cell.dataset.y);

		const result = this.game.placeNextShip(x, y);

		if (result.status === "ok") {
			this.render();
		}
	}

	async handleEnemyBoardClick(e) {
		if (this.game.placementMode || this.game.gameOver) return;

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

		if (this.game.placementMode) {
			indicator.textContent = "Place your ships";
			return;
		}

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
