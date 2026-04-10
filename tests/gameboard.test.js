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
			board.placeShip(ship, -1, 0, "horizontal");
		}).toThrow("Ship is out of bounds");
	});

	test("doesn't place ship outside grid vertically", () => {
		const board = new Gameboard();
		const ship = new Ship(3);

		expect(() => {
			board.placeShip(ship, 0, 8, "vertical");
		}).toThrow("Ship is out of bounds");
	});

	test("doesn't allow overlapping ships", () => {
		const board = new Gameboard();
		const ship = new Ship(3);
		const ship2 = new Ship(2);

		board.placeShip(ship, 0, 0, "horizontal");

		expect(() => {
			board.placeShip(ship2, 0, 0, "vertical");
		}).toThrow("Cell is occupied");
	});

	test("doesn't allow ships to be adjacent (including diagonals)", () => {
		const board = new Gameboard();
		const ship = new Ship(2);
		const ship2 = new Ship(2);

		board.placeShip(ship, 1, 1, "horizontal");

		expect(() => {
			board.placeShip(ship2, 3, 2, "horizontal");
		}).toThrow("Too close to existing ship");
	});

	test("records a miss when attacking empty cell", () => {
		const board = new Gameboard();

		const result = board.receiveAttack(0, 0);

		expect(result).toBe("miss");
		expect(board.grid[0][0]).toBe("miss");
	});
});
