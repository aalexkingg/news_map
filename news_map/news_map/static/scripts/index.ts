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

    private async getMapData() {
        const response = await fetch("/points")
            .then(function(response) {
                // parse response to json data
                return response.json();
        }).then(function(data: string[]) {
            // print data
            data.forEach((value, index) => {
                value.replace('\\n', '').trimStart().trimEnd();
            })
            let d = data.map((a) => a.trim()).join("");
            console.log(d);
            //console.log(JSON.parse(data[0]));
            return data;
        });

    }

    private drawMap() {
        let data = this.getMapData();
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








