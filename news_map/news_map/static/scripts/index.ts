// imports


// constants
const darkTheme: boolean = false;
const test_colour: string = "#00BFFF";

const ocean_colour: string = !darkTheme ? "#00BFFF" : "black";
const country_colour: string = "";
const border_colour: string = "";
const highlighted_colour: string = "";

class MapApp {
    private canvas: HTMLCanvasElement | null;

    private points: JSON = JSON.parse("");

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

    private async getMapData() {
        const response = await fetch("/points")
            .then(function(response: Response) {
                // parse response to json data
                if (response.ok && response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw new Error(response.statusText);
                }
        }).then(function(data: string[]) {
            // Trim and join array of strings and parse to json
            console.log(data);
            let d = JSON.parse(data.map((a: string) => a.trim()).join(""));

            console.log(d);
            return d;
        });
        return [];
    }

    private async drawMap() {
        let data: string[] = await this.getMapData()
        console.log(data);

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








