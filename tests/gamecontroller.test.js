import GameController from "../src/GameController.js";
import Ship from "../src/Ship.js";

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

	test("detects winner when all ships are sunk", () => {
		const game = new GameController();

		const ship = new Ship(1);

		game.player1.board.placeShip(ship, 0, 0);

		ship.hit();

		const winner = game.checkWinner();

		expect(winner).toBe(game.player2);
	});
});
