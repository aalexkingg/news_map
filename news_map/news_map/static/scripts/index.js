"use strict";
// imports
// constants
const darkTheme = false;
const test_colour = "#00BFFF";
const ocean_colour = !darkTheme ? "#00BFFF" : "black";
const country_colour = "";
const border_colour = "";
const highlighted_colour = "";
const lon_min = -180;
const lon_max = 180;
const lat_min = -90;
const lat_max = 90;
class MapApp {
    constructor() {
        this.display_width = window.screen.width;
        this.display_height = window.screen.height;
        this.pressEventHandler = (e) => {
            //let X = e as TouchEvent
            //let Y
        };
        // map canvas element
        let canvas = document.getElementById('map');
        // set background
        canvas === null || canvas === void 0 ? void 0 : canvas.setAttribute("style", `background-color: ${ocean_colour};`);
        this.clickX = -1;
        this.clickY = -1;
        this.canvas = canvas;
        //this.ctx = this.canvas?.getContext("2d") as CanvasRenderingContext2D | null;
        //this.ctx?.fillStyle = country_colour;
        this.getMapData();
    }
    // Map coords need to be calculated as canvas coords start at 0,0 from top left
    async getMapData() {
        const response = await fetch("/points")
            .then(function (response) {
            // parse response to json data
            if (response.ok && response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        }).then((data) => {
            // Trim and join array of strings and parse to json
            let points = JSON.parse(data.map((a) => a.trim()).join(""));
            for (let index = 0; index < points.features.length; index++) {
                this.drawMap(points.features[index].properties.ADMIN, points.features[index].geometry.coordinates[0][0]);
            }
        });
    }
    drawMap(name, coords) {
        var _a;
        let ctx = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getContext("2d");
        ctx.fillStyle = country_colour;
        let [x0, y0] = this.convertCoords(coords[0]);
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        // [Long, Lat] (idk why they are stored the wrong way around?)
        for (var coord of coords.slice(1)) {
            var [x, y] = this.convertCoords(coord);
            console.log(x, y);
            ctx.lineTo(x, y);
            //console.log(coord);
        }
        ctx.stroke();
        ctx.closePath();
    }
    convertCoords(coords) {
        // [Long, Lat]
        let x = (coords[0] - lon_min) / (lon_max - lon_min) * this.display_width;
        let y = (coords[1] - lat_min) / (lat_max - lat_min) * this.display_height;
        return [x, y];
    }
    addClick(x, y) {
        this.clickX = x;
        this.clickY = y;
    }
    cleanCanvas() {
        // redraw map/remove highlighting
        this.clickX = -1;
        this.clickY = -1;
    }
}
new MapApp();
//# sourceMappingURL=index.js.map