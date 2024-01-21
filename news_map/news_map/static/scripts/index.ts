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

    private clickX: number = -1;
    private clickY: number = -1;

    private map: { string: number[] } = {};

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
        }).then((data: string[]) => {
            // Trim and join array of strings and parse to json
            let points = JSON.parse(data.map((a: string) => a.trim()).join(""));

            for (var index in points.features.length) {
                this.map[points.features[index].properties.ADMIN] = points.features[0].geometry.coordinates[0][0]
            }

            console.log(points.features.length);

            // [Long, Lat] (idk why they are stored the wrong way around?)
            console.log(points);

            console.log(points.features[0].properties);
            console.log(points.features[0].geometry.coordinates);

            for (let item of this.map) {

            }

        });
    }

    private drawMap() {
        this.getMapData()

        const ctx = this.canvas?.getContext("2d");



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








