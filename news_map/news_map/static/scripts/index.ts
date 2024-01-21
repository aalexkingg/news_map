// imports



interface IDictionary extends Iterable<number> {
    [key: string]: number[]
}

// constants
const darkTheme: boolean = false;
const test_colour: string = "#00BFFF";

const ocean_colour: string = !darkTheme ? "#00BFFF" : "black";
const country_colour: string = "";
const border_colour: string = "";
const highlighted_colour: string = "";

class MapApp {
    private canvas: HTMLCanvasElement | null;
    private ctx: CanvasRenderingContext2D | null;

    private clickX: number;
    private clickY: number;

    constructor() {
        // map canvas element
        let canvas = document.getElementById('map') as HTMLCanvasElement | null;

        // set background
        canvas?.setAttribute("style", `background-color: ${ocean_colour};`);

        this.clickX = -1
        this.clickY = -1;

        this.canvas = canvas;
        this.ctx = this.canvas?.getContext("2d") as CanvasRenderingContext2D | null;

        this.getMapData();
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
        }).then((data: string[]) => {
            // Trim and join array of strings and parse to json
            let points = JSON.parse(data.map((a: string) => a.trim()).join(""));

            for (var index in points.features.length) {
                this.drawMap(points.features[index].properties.ADMIN, points.features[index].geometry.coordinates[0][0]);
            }
        });
    }

    private drawMap(name: string, coords: number[]) {
        this.ctx?.beginPath();
        //this.ctx?.moveTo(coords[1], coords[0]);

        // [Long, Lat] (idk why they are stored the wrong way around?)
        for (var coord of coords.slice(1) as number[]) {
            //this.ctx?.lineTo(coord[1], coord[0]);
            console.log(coord);
        }

    }

    private addClick(x: number, y:number) {
        this.clickX = x;
        this.clickY = y;
    }

    private cleanCanvas() {
        // redraw map/remove highlighting
        this.clickX = -1;
        this.clickY = -1;
    }

    private pressEventHandler = (e: MouseEvent | TouchEvent) => {
        //let X = e as TouchEvent
        //let Y
    }

}

new MapApp();








