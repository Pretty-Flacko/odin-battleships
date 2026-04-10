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

	placeShip(ship, coordinate) {
		this.ships.push({ ship, coordinate });
	}

	hasShipAt(coordinate) {
		return this.ships.some((entry) => {
			return (
				entry.coordinate[0] === coordinate[0] &&
				entry.coordinate[1] === coordinate[1]
			);
		});
	}
}
