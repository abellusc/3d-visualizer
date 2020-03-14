import { IApplicationState } from "../engine/IApplicationState";
import { Visualizer2D } from "./Visualizer2D";
import { StartScene } from "./scenes/StartScene";

var state: IApplicationState;
const visualizer = new Visualizer2D();

const context = document.getElementById('renderCanvas') as HTMLCanvasElement;
context.width = window.innerWidth;
context.height = window.innerHeight;

window.addEventListener('resize', () => {
    context.width = window.innerWidth;
    context.height = window.innerHeight;
});

visualizer.init();
setInterval(() => {
    visualizer.update();
}, 1000 / 60);
