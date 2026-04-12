import "./style.css";
import GameController from "./GameController.js";
import UIController from "./UIController.js";

const game = new GameController();
game.autoPlaceShips(game.player1);
game.autoPlaceShips(game.player2);

const ui = new UIController(game);

ui.render();
