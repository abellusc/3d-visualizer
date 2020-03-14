export interface IScene {
    active: boolean;
    
    onEnter(): void;
    doRender(): void;
    onExit(): void;
}