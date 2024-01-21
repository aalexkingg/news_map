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
        this.points = JSON.parse("");
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
            if (response.ok && response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        }).then(function (data) {
            // Trim and join array of strings and parse to json
            console.log(data);
            let d = JSON.parse(data.map((a) => a.trim()).join(""));
            console.log(d);
            return d;
        });
        return [];
    }
    async drawMap() {
        let data = await this.getMapData();
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
