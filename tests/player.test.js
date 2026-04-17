import Player from "../src/Player.js";
import Ship from "../src/Ship.js";

describe("Player", () => {
	test("'human' can be created with a gameboard", () => {
		const player = new Player("human");

		expect(player.type).toBe("human");
		expect(player.board).toBeDefined();
	});

	test("'computer' can be created with a gameboard", () => {
		const player = new Player("computer");

		expect(player.type).toBe("computer");
		expect(player.board).toBeDefined();
	});

	test("can attack another player's board", () => {
		const player1 = new Player("human");
		const player2 = new Player("human");

		const ship = new Ship(2);
		player2.board.placeShip(ship, 0, 0);

		const result = player1.attack(player2.board, 0, 0);

		expect(result.status).toBe("hit");
	});

	test("'computer' can generate valid attack targets", () => {
		const cpu = new Player("computer");

		const [x, y] = cpu.getRandomAttackTarget();

		expect(x).toBeGreaterThanOrEqual(0);
		expect(x).toBeLessThan(10);
		expect(y).toBeGreaterThanOrEqual(0);
		expect(y).toBeLessThan(10);
	});
});
