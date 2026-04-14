export default class UIController {
	constructor(game) {
		this.game = game;

		this.hoverX = null;
		this.hoverY = null;
		this.previewCells = [];

		this.boardsEl = document.querySelector("#boards");
		this.bannerEl = document.querySelector("#winner-banner");
		this.playerBoardEl = document.querySelector("#player-board");
		this.enemyBoardEl = document.querySelector("#enemy-board");

		this.startGameBtn = document.querySelector("#start-game-btn");
		this.autoPlaceBtn = document.querySelector("#auto-place-btn");
		this.rotateBtn = document.querySelector("#rotate-btn");

		/* =========================
		   SETUP
		========================= */

		this.startGameBtn.addEventListener("click", () => {
			this.game.startSetup();
			this.bannerEl.textContent = "";
			this.bannerEl.classList.add("hidden");
			this.render();
		});

		this.autoPlaceBtn.addEventListener("click", () => {
			this.game.autoPlaceShips(this.game.player1, this.game.currentShipIndex);
			this.game.tryStartBattle();
			this.render();
		});

		this.rotateBtn.addEventListener("click", () => {
			this.game.toggleDirection();
			this.render();
		});
		window.addEventListener("keydown", (e) => {
			if (e.key === "r") {
				this.game.toggleDirection();
				this.render();
			}
		});

		/* =========================
		   BOARD EVENTS
		========================= */

		this.playerBoardEl.addEventListener("click", (e) =>
			this.handlePlayerBoardClick(e),
		);

		this.enemyBoardEl.addEventListener("click", (e) =>
			this.handleEnemyBoardClick(e),
		);

		this.playerBoardEl.addEventListener("mousemove", (e) => {
			this.handleHover(e);
		});
		this.playerBoardEl.addEventListener("mouseleave", () => {
			this.handleLeave();
		});
	}

	/* =========================
	   INPUT HANDLERS
	========================= */

	handlePlayerBoardClick(e) {
		if (this.game.phase !== "placement") return;

		const cell = e.target.closest(".cell");
		if (!cell) return;

		const x = Number(cell.dataset.x);
		const y = Number(cell.dataset.y);

		const result = this.game.placeNextShip(x, y);

		if (result.status === "ok") {
			this.game.tryStartBattle();
			this.render();
		}
	}

	async handleEnemyBoardClick(e) {
		if (this.game.phase !== "battle") return;

		const cell = e.target.closest(".cell");
		if (!cell) return;

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
			await this.delay(400);

			result = this.game.playComputerTurn();

			if (result.status === "invalid") continue;

			this.render();

			if (result.winner) {
				this.showWinner(result.winner.type);
				return;
			}
		}
	}

	handleHover(e) {
		if (this.game.phase !== "placement") return;

		const cell = e.target.closest(".cell");
		if (!cell) return;

		const x = Number(cell.dataset.x);
		const y = Number(cell.dataset.y);

		if (this.hoverX === x && this.hoverY === y) return;

		this.hoverX = x;
		this.hoverY = y;

		this.render();
	}

	handleLeave() {
		if (this.hoverX === null && this.hoverY === null) return;

		this.hoverX = null;
		this.hoverY = null;

		this.render();
	}

	/* =========================
	   RENDER
	========================= */

	render() {
		this.updateUIState();
		this.updateTurnIndicator();

		if (this.game.phase === "idle") return;

		this.renderBoard(this.game.player1.board, this.playerBoardEl, false);
		this.renderBoard(this.game.player2.board, this.enemyBoardEl, true);
	}

	renderBoard(board, container, isEnemy = false) {
		container.innerHTML = "";
		container.classList.add("board");

		const preview = isEnemy ? [] : this.getPreviewCells();

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
					!cell.revealed &&
					this.game.phase === "battle"
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

	/* =========================
	   UI STATE
	========================= */

	updateUIState() {
		const isPlacement = this.game.phase === "placement";

		this.boardsEl.style.display = this.game.phase === "idle" ? "none" : "flex";
		this.autoPlaceBtn.style.display = isPlacement ? "block" : "none";
		this.rotateBtn.style.display = isPlacement ? "block" : "none";
	}

	updateTurnIndicator() {
		const indicator = document.querySelector("#turn-indicator");

		indicator.classList.remove(
			"player-turn",
			"computer-turn",
			"game-over",
			"placement",
		);

		switch (this.game.phase) {
			case "placement":
				indicator.textContent = "Place your ships";
				indicator.classList.add("placement");
				break;
			case "battle":
				if (this.game.currentPlayer.type === "human") {
					indicator.textContent = "Your turn";
					indicator.classList.add("player-turn");
				} else {
					indicator.textContent = "Computer thinking...";
					indicator.classList.add("computer-turn");
				}
				break;
			case "gameover":
				indicator.textContent = "Game Over";
				indicator.classList.add("game-over");
				break;
			default:
				indicator.textContent = "";
		}
	}

	/* =========================
	   UTIL
	========================= */

	delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	showWinner(type) {
		const formatted = type.charAt(0).toUpperCase() + type.slice(1);

		this.bannerEl.textContent = `${formatted} wins!`;
		this.bannerEl.classList.remove("hidden");
	}
}
