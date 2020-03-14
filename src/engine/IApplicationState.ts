import { IScene } from "./IScene";

export interface IApplicationState {
    currentScene: string;
    scenes: {
        [sceneName: string]: IScene;
    };

    
}