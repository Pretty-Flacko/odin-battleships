import Ship from "../src/Ship.js";

describe("Ship", () => {
	test("increments hits when hit", () => {
		const ship = new Ship(3);

		ship.hit();

		expect(ship.hits).toBe(1);
	});

	test("is sunk when hits equal length", () => {
		const ship = new Ship(2);

		ship.hit();
		ship.hit();

		expect(ship.isSunk()).toBe(true);
	});
});
