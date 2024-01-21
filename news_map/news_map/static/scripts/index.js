"use strict";
// imports
// constants
const darkTheme = false;
const ocean_colour = !darkTheme ? "#00BFFF" : "black";
const country_colour = "";
const border_colour = "";
const highlighted_colour = "";
class MapApp {
    constructor() {
        this.clickX = -1;
        this.clickY = -1;
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
            return response.json();
        }).then(function (data) {
            // print data
            data.forEach((value, index) => {
                value.replace('\\n', '').trimStart().trimEnd();
            });
            // Trim and join array of strings and parse to json
            return JSON.parse(data.map((a) => a.trim()).join(""));
        });
    }
    drawMap() {
        let data = this.getMapData();
        console.log(data);
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
