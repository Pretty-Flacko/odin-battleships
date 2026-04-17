import GameController from "../src/GameController.js";
import Ship from "../src/Ship.js";

describe("GameController", () => {
	test("initializes with two players", () => {
		const game = new GameController();

		expect(game.player1).toBeNull();
		expect(game.player2).toBeNull();
	});

	test("starts with player1 as current player", () => {
		const game = new GameController();
		game.startSetup();

		expect(game.currentPlayer).toBe(game.player1);
	});

	test("switches turn after a miss", () => {
		const game = new GameController();
		game.startSetup();
		game.phase = "battle";

		const missingPlayer = game.currentPlayer;

		jest.spyOn(game.player1, "attack").mockReturnValue({
			status: "miss",
			sunk: false,
		});

		game.playTurn(5, 5);

		expect(game.currentPlayer).not.toBe(missingPlayer);
	});

	test("ends game when last ship is sunk", () => {
		const game = new GameController();
		game.startSetup();
		game.phase = "battle";

		jest.spyOn(game.player2.board, "allShipsSunk").mockReturnValue(true);

		game.playTurn(0, 0);

		expect(game.phase).toBe("gameover");
	});
});

describe("GameController AI", () => {
	test("AI switches from 'hunt' to 'target' on first hit", () => {
		const game = new GameController();
		game.startSetup();
		game.phase = "battle";

		game.aiState.mode = "hunt";

		jest.spyOn(game.currentPlayer, "attack").mockReturnValue({
			status: "hit",
			sunk: false,
		});

		game.playComputerTurn();

		expect(game.aiState.mode).toBe("target");
		expect(game.aiState.originHit).not.toBeNull();
	});
});
