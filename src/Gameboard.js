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
		if (
			(direction === "horizontal" && x + ship.length > this.size) ||
			(direction === "vertical" && y + ship.length > this.size)
		) {
			throw new Error("Ship is out of bounds");
		}

		const coords = [];

		for (let i = 0; i < ship.length; i++) {
			const cx = direction === "horizontal" ? x + i : x;
			const cy = direction === "vertical" ? y + i : y;

			coords.push([cx, cy]);
		}

		for (const [cx, cy] of coords) {
			if (this.grid[cy][cx] !== null) {
				throw new Error("Occupied");
			}
		}

		for (const [cx, cy] of coords) {
			this.grid[cy][cx] = ship;
		}
	}

	hasShipAt(x, y) {
		return this.grid[y][x] !== null;
	}
}
