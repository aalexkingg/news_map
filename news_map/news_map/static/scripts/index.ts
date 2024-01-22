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

const lon_min: number = -180;
const lon_max: number = 180;
const lat_min: number = -90;
const lat_max: number = 90;


class MapApp {
    private canvas: HTMLCanvasElement | null;
    //private ctx: CanvasRenderingContext2D | null;

    private clickX: number;
    private clickY: number;

    private display_width: number = window.screen.width;
    private display_height: number = window.screen.height;

    constructor() {
        // map canvas element
        let canvas = document.getElementById('map') as HTMLCanvasElement | null;

        // set background
        canvas?.setAttribute("style", `background-color: ${ocean_colour};`);

        this.clickX = -1
        this.clickY = -1;

        this.canvas = canvas;
        //this.ctx = this.canvas?.getContext("2d") as CanvasRenderingContext2D | null;
        //this.ctx?.fillStyle = country_colour;

        this.getMapData();
    }

    // Map coords need to be calculated as canvas coords start at 0,0 from top left

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

            for (let index: number = 0; index < points.features.length; index++) {
                this.drawMap(points.features[index].properties.ADMIN, points.features[index].geometry.coordinates[0][0]);
            }
        });
    }

    private drawMap(name: string, coords: number[][]) {
        let ctx = this.canvas?.getContext("2d") as CanvasRenderingContext2D;
        ctx.fillStyle = country_colour;
        let [x0, y0] = this.convertCoords(coords[0]);
        ctx.beginPath();
        ctx.moveTo(x0, y0);

        // [Long, Lat] (idk why they are stored the wrong way around?)
        for (var coord of coords.slice(1) as Array<Array<number>>) {
            var [x, y] = this.convertCoords(coord);
            console.log(x, y);
            ctx.lineTo(x, y);
            //console.log(coord);
        }
        ctx.stroke();
        ctx.closePath();

    }

    private convertCoords(coords: Array<number>): number[] {
        // [Long, Lat]
        let x: number = (coords[0] - lon_min) / (lon_max - lon_min) * this.display_width;
        let y: number = (coords[1] - lat_min) / (lat_max - lat_min) * this.display_height;
        return [x, y];
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








