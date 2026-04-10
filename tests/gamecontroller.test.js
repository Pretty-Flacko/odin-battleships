import GameController from "../src/GameController.js";

describe("GameController", () => {
	test("initializes with two players", () => {
		const game = new GameController();

		expect(game.player1).toBeDefined();
		expect(game.player2).toBeDefined();
	});
});
