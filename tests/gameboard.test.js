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

	test("places ship horizontally", () => {
		const board = new Gameboard();
		const ship = new Ship(3);

		board.placeShip(ship, 7, 0, "horizontal");

		expect(board.hasShipAt(7, 0)).toBe(true);
		expect(board.hasShipAt(8, 0)).toBe(true);
		expect(board.hasShipAt(9, 0)).toBe(true);
	});

	test("places ship vertically", () => {
		const board = new Gameboard();
		const ship = new Ship(3);

		board.placeShip(ship, 0, 4, "vertical");

		expect(board.hasShipAt(0, 4)).toBe(true);
		expect(board.hasShipAt(0, 5)).toBe(true);
		expect(board.hasShipAt(0, 6)).toBe(true);
	});

	test("doesn't place ship outside grid horizontally", () => {
		const board = new Gameboard();
		const ship = new Ship(3);

		expect(() => {
			board.placeShip(ship, 8, 0, "horizontal");
		}).toThrow();
	});

	test("doesn't place ship outside grid vertically", () => {
		const board = new Gameboard();
		const ship = new Ship(3);

		expect(() => {
			board.placeShip(ship, 0, 8, "vertical");
		}).toThrow();
	});
});
