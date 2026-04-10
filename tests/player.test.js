import Player from "../src/Player.js";

describe("Player", () => {
	test("can be created with a gameboard", () => {
		const player = new Player("human");

		expect(player.type).toBe("human");
		expect(player.board).toBeDefined();
	});
});
