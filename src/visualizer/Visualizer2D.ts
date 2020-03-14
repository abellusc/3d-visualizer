import { IApplicationState } from "../engine/IApplicationState";
import { StartScene } from "./scenes/StartScene";
import { SelectScene } from "./scenes/SelectScene";
import { VisualizerScene } from "./scenes/VisualizerScene";

export class Visualizer2D {
    public state: IApplicationState;

    init() {
        this.state = {
            currentScene: 'start',
            scenes: {
                ['start']: new StartScene(this),
                ['select']: new SelectScene(this),
                ['visualizer']: new VisualizerScene(this),
            }
        };
    }

    private clearCanvas() {
        const context = (document.getElementById('renderCanvas') as HTMLCanvasElement).getContext('2d');

        context.fillStyle = '#000033';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }

    update() {
        this.clearCanvas();
        // derender everything else
        for (const sceneId in this.state.scenes) {
            if (sceneId === this.state.currentScene) continue;
            if (this.state.scenes[sceneId].active) {
                this.state.scenes[sceneId].onExit();
                this.state.scenes[sceneId].active = false;
            }
        }

        // render the current scene
        this.state.scenes[this.state.currentScene].doRender();
    }

}