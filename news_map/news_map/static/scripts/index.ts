// imports


// constants
const ocean: string = "#00BFFF";


class MapApp {
    private canvas: HTMLCanvasElement | null;

    private clickX: number = -1;
    private clickY: number = -1;

    constructor() {
        // map canvas element
        let canvas = document.getElementById('map') as HTMLCanvasElement | null;
        // set background
        canvas?.setAttribute("style", `background-color: ${ocean};`);


        this.canvas = canvas;



    }

    private getMap() {
        //fetch("/points")
    }

    private drawMap() {
        //const data = this.getMap();
    }

    private addClick(x: number, y:number) {
        this.clickX = x;
        this.clickY = y;
    }

    private cleanCanvas() {
        // redraw map
        this.drawMap();
        this.clickX = -1;
        this.clickY = -1;
    }

    private pressEventHandler = (e: MouseEvent | TouchEvent) => {
        let X = e as TouchEvent
        let Y
    }

}

new MapApp();








