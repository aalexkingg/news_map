const domain = "127.0.0.1:5000";
const points = await fetch(domain + "/points")
    .then((response) => response.json());
console.log(points);
export {};
