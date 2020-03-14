import { IScene } from "../../engine/IScene";
import { Visualizer2D } from "../Visualizer2D";

export class VisualizerScene implements IScene {

    public active: boolean = false;

    constructor(private readonly visualizer: Visualizer2D) {}

    onEnter(): void {
        console.log('entered scene: visualizer');
    }

    doRender(): void {
        if (!this.active) {
            this.onEnter();
            this.active = true;
        }

        console.log('rendering: visualizer');

        
    }

    onExit(): void {
        console.log('exiting scene: visualizer')
    }


}