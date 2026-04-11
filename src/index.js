import "./style.css";
import GameController from "./GameController.js";
import UIController from "./UIController.js";

const game = new GameController();
game.setupFleet(game.player1);
game.setupFleet(game.player2);

const ui = new UIController(game);

ui.render();
