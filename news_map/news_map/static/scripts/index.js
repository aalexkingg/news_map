"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/*
async function get_points() {
    return await fetch("/points")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            console.log(response.body);
            return JSON.stringify(response.body);
        });
}
*/
async function fetchJSON(url) {
    try {
        const response = await axios_1.default.get(url);
        if (response.status >= 200 && response.status < 300) {
            const data = JSON.parse(response.data);
            console.log("Response: ", data);
        }
        else {
            console.error("Request failed with status: ", response.status);
        }
    }
    catch (error) {
        // @ts-ignore
        console.error("Error fetching data: ", error.message);
    }
}
//const points = get_points();
//console.log(points);
fetchJSON("/points");
