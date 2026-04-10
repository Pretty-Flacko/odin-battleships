import Gameboard from "../src/Gameboard.js";
import Ship from "../src/Ship.js";

describe("Gameboard", () => {
	test("creates a 10x10 grid", () => {
		const board = new Gameboard();

		expect(board.grid.length).toBe(10); // rows (y)
		expect(board.grid[0].length).toBe(10); // columns (x)
	});

	test("grid cells are initialized as null", () => {
		const board = new Gameboard();

		expect(board.grid[0][0]).toBe(null);
		expect(board.grid[5][7]).toBe(null);
	});

	test("can place a ship at a coordinate", () => {
		const board = new Gameboard();
		const ship = new Ship(3);

		board.placeShip(ship, [0, 0]);

		expect(board.hasShipAt([0, 0])).toBe(true);
	});
});
