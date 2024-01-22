"use strict";
// imports
// constants
const darkTheme = false;
const test_colour = "#00BFFF";
const ocean_colour = !darkTheme ? "#00BFFF" : "black";
const country_colour = "";
const border_colour = "";
const highlighted_colour = "";
class MapApp {
    constructor() {
        var _a;
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
        this.ctx = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getContext("2d");
        this.getMapData();
    }
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
            for (var index in points.features.length) {
                console.log(index);
                this.drawMap(points.features[index].properties.ADMIN, points.features[index].geometry.coordinates[0][0]);
            }
        });
    }
    drawMap(name, coords) {
        var _a;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.beginPath();
        //this.ctx?.moveTo(coords[1], coords[0]);
        // [Long, Lat] (idk why they are stored the wrong way around?)
        for (var coord of coords.slice(1)) {
            //this.ctx?.lineTo(coord[1], coord[0]);
            console.log(coord);
        }
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
