import "./style.css";
import GameController from "./GameController.js";
import UIController from "./UIController.js";

const game = new GameController();
const ui = new UIController(game);

ui.render();
