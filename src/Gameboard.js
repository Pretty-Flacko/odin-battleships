import { EntryOptionPlugin } from "webpack";

export default class Gameboard {
	constructor(size = 10) {
		this.size = size;
		this.grid = this.createGrid(size);
	}

	createGrid(size) {
		const grid = [];

		for (let y = 0; y < size; y++) {
			const row = [];

			for (let x = 0; x < size; x++) {
				row.push(null);
			}

			grid.push(row);
		}

		return grid;
	}

	placeShip(ship, x, y, direction = "horizontal") {
		for (let i = 0; i < ship.length; i++) {
			if (direction === "horizontal") {
				this.grid[y][x + i] = ship;
			} else if (direction === "vertical") {
				this.grid[y + i][x] = ship;
			}
		}
	}

	hasShipAt(x, y) {
		return this.grid[y][x] !== null;
	}
}
