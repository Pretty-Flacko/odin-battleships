export default class Gameboard {
	constructor(size = 10) {
		this.size = size;
		this.grid = this.createGrid(size);
		this.ships = [];
	}

	createGrid(size) {
		const grid = [];

		for (let y = 0; y < size; y++) {
			const row = [];

			for (let x = 0; x < size; x++) {
				row.push({
					ship: null,
					revealed: false,
				});
			}

			grid.push(row);
		}

		return grid;
	}

	placeShip(ship, x, y, direction = "horizontal") {
		const coords = this.#validatePlacement(ship.length, x, y, direction);
		ship.coordinates = coords;

		this.ships.push(ship);

		for (const [cx, cy] of coords) {
			this.grid[cy][cx].ship = ship;
		}
	}

	hasShipAt(x, y) {
		return this.grid[y][x].ship !== null;
	}

	receiveAttack(x, y) {
		if (x < 0 || y < 0 || x >= this.size || y >= this.size) {
			throw new Error("Attack is out of bounds");
		}

		const targetCell = this.grid[y][x];

		if (targetCell.revealed) {
			return { status: "invalid", sunk: false };
		} else {
			targetCell.revealed = true;

			if (targetCell.ship) {
				targetCell.ship.hit();

				if (targetCell.ship.isSunk()) {
					this.revealSunkShip(targetCell.ship);
					return { status: "hit", sunk: true };
				}

				return { status: "hit", sunk: false };
			} else {
				return { status: "miss", sunk: false };
			}
		}
	}

	revealSunkShip(ship) {
		const coords = ship.coordinates;

		for (const [x, y] of coords) {
			for (let dy = -1; dy <= 1; dy++) {
				for (let dx = -1; dx <= 1; dx++) {
					const nx = x + dx;
					const ny = y + dy;

					if (nx < 0 || ny < 0 || nx >= this.size || ny >= this.size) continue;

					if (!this.grid[ny][nx].revealed) {
						this.grid[ny][nx].revealed = true;
					}
				}
			}
		}
	}

	allShipsSunk() {
		if (this.ships.length === 0) return false;

		return this.ships.every((ship) => ship.isSunk());
	}

	#validatePlacement(shipLength, x, y, direction) {
		if (
			x < 0 ||
			y < 0 ||
			(direction === "horizontal" && x + shipLength > this.size) ||
			(direction === "vertical" && y + shipLength > this.size)
		) {
			throw new Error("Ship is out of bounds");
		}

		const coords = this.#getShipCoordinates(shipLength, x, y, direction);

		for (const [cx, cy] of coords) {
			if (this.grid[cy][cx].ship) {
				throw new Error("Cell is occupied");
			}

			if (this.#isAdjacentOccupied(cx, cy)) {
				throw new Error("Too close to existing ship");
			}
		}

		return coords;
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
				if (this.grid[ny][nx].ship) {
					return true;
				}
			}
		}

		return false;
	}
}
