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
        this.clickX = -1;
        this.clickY = -1;
        this.map = {};
        this.pressEventHandler = (e) => {
            //let X = e as TouchEvent
            //let Y
        };
        // map canvas element
        let canvas = document.getElementById('map');
        // set background
        canvas === null || canvas === void 0 ? void 0 : canvas.setAttribute("style", `background-color: ${ocean_colour};`);
        this.canvas = canvas;
        this.drawMap();
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
                this.map[points.features[index].properties.ADMIN] = points.features[0].geometry.coordinates[0][0];
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
    drawMap() {
        var _a;
        this.getMapData();
        const ctx = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getContext("2d");
    }
    addClick(x, y) {
        this.clickX = x;
        this.clickY = y;
    }
    cleanCanvas() {
        // redraw map
        this.drawMap();
        this.clickX = -1;
        this.clickY = -1;
    }
}
new MapApp();
