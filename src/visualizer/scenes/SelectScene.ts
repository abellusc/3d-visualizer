import { IScene } from "../../engine/IScene";
import { Visualizer2D } from "../Visualizer2D";

export class SelectScene implements IScene {

    public active: boolean = false;

    constructor(private readonly visualizer: Visualizer2D) {}

    onEnter(): void {
        console.log('entered scene: selector');
    }

    doRender(): void {
        if (!this.active) {
            this.onEnter();
            this.active = true;
        }

        console.log('rendering: selector');

    }

    onExit(): void {
        console.log('exiting scene: selector')
    }


}