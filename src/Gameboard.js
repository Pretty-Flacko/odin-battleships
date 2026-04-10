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
				row.push({
					ship: null,
					wasHit: false,
				});
			}

			grid.push(row);
		}

		return grid;
	}

	placeShip(ship, x, y, direction = "horizontal") {
		if (
			x < 0 ||
			y < 0 ||
			(direction === "horizontal" && x + ship.length > this.size) ||
			(direction === "vertical" && y + ship.length > this.size)
		) {
			throw new Error("Ship is out of bounds");
		}

		const coords = this.#getShipCoordinates(ship.length, x, y, direction);

		for (const [cx, cy] of coords) {
			if (this.grid[cy][cx].ship !== null) {
				throw new Error("Cell is occupied");
			}

			if (this.#isAdjacentOccupied(cx, cy)) {
				throw new Error("Too close to existing ship");
			}
		}

		for (const [cx, cy] of coords) {
			this.grid[cy][cx].ship = ship;
		}
	}

	hasShipAt(x, y) {
		return this.grid[y][x].ship !== null;
	}

	receiveAttack(x, y) {
		const targetCell = this.grid[y][x];

		if (targetCell.wasHit === true) {
			throw new Error("Already attacked");
		} else {
			targetCell.wasHit = true;

			if (targetCell.ship) {
				targetCell.ship.hit();
				return "hit";
			} else {
				return "miss";
			}
		}
	}

	#getShipCoordinates(shipLength, x, y, direction) {
		const coords = [];

		for (let i = 0; i < shipLength; i++) {
			const cx = direction === "horizontal" ? x + i : x;
			const cy = direction === "vertical" ? y + i : y;

			coords.push([cx, cy]);
		}

		return coords;
	}

	#isAdjacentOccupied(x, y) {
		for (let dy = -1; dy <= 1; dy++) {
			for (let dx = -1; dx <= 1; dx++) {
				//skip the center cell
				if (dx === 0 && dy === 0) continue;

				const nx = x + dx;
				const ny = y + dy;

				// skip out-of-bounds cells
				if (nx < 0 || ny < 0 || nx >= this.size || ny >= this.size) {
					continue;
				}

				// check adjacent cells for a ship
				if (this.grid[ny][nx].ship !== null) {
					return true;
				}
			}
		}

		return false;
	}
}
