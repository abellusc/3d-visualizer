import { IScene } from "../../engine/IScene";
import { Visualizer2D } from "../Visualizer2D";

export class StartScene implements IScene {

    public active: boolean = false;

    constructor(private readonly visualizer: Visualizer2D) {}

    onEnter(): void {
        console.log('entered scene: start');

        window.addEventListener('click', (ev: MouseEvent) => {
            if (this.active) {
                this.onClick();
            }
        });
    }

    onClick(): void {
        this.visualizer.state.currentScene = 'select';
    }

    doRender(): void {
        if (!this.active) {
            this.onEnter();
            this.active = true;
        }

        console.log('rendering: start');

        const context = (document.getElementById('renderCanvas') as HTMLCanvasElement).getContext('2d');

        context.textAlign = 'center';
        context.font = '36px Arial';
        context.strokeStyle = '#ffffff';
        context.strokeText('Visualizer', context.canvas.width / 2, (context.canvas.height - 100) / 2);

        context.font = '18px Arial';
        context.strokeText('Click to Play', context.canvas.width / 2, (context.canvas.height + 20) / 2);
    }

    onExit(): void {
        console.log('exiting scene: start')
    }


}