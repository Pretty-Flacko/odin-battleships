import GameController from "../src/GameController.js";

describe("GameController", () => {
	test("initializes with two players", () => {
		const game = new GameController();

		expect(game.player1).toBeDefined();
		expect(game.player2).toBeDefined();
	});

	test("starts with player1 as current player", () => {
		const game = new GameController();

		expect(game.currentPlayer).toBe(game.player1);
	});

	test("switches turns between players", () => {
		const game = new GameController();

		const first = game.currentPlayer;

		game.switchTurn();

		expect(game.currentPlayer).not.toBe(first);
	});

	test("switches turn after a miss", () => {
		const game = new GameController();

		const missingPlayer = game.currentPlayer;

		game.playTurn(5, 5);

		expect(game.currentPlayer).not.toBe(missingPlayer);
	});
});
