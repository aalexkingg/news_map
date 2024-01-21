// imports


// constants
const darkTheme: boolean = false;

const ocean_colour: string = !darkTheme ? "#00BFFF" : "black";
const country_colour: string = "";
const border_colour: string = "";
const highlighted_colour: string = "";

class MapApp {
    private canvas: HTMLCanvasElement | null;

    private clickX: number = -1;
    private clickY: number = -1;

    constructor() {
        // map canvas element
        let canvas = document.getElementById('map') as HTMLCanvasElement | null;
        // set background
        canvas?.setAttribute("style", `background-color: ${ocean_colour};`);


        this.canvas = canvas;
        this.drawMap();
    }

    private async getMapData(): Promise<string[]> {
        const response = await fetch("/points")
            .then(function(response) {
                // parse response to json data
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
        }).then(function(data: string[]) {
            // Trim and join array of strings and parse to json
            return data;
        });
        return [];
    }

    private async drawMap() {
        let data: string[] = await this.getMapData()
        let d = JSON.parse(data.map((a) => a.trim()).join(""));
        console.log(d);
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
        //let X = e as TouchEvent
        //let Y
    }

}

new MapApp();








