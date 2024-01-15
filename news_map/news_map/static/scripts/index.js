"use strict";
const dom = "127.0.0.1:5000";
const get_points = async function (domain) {
    return await fetch(domain + "/points")
        .then((response) => response.json());
};
const points = get_points(dom);
console.log(points);
