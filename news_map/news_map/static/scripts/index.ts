
const domain = "127.0.0.1:5000";

const get_points = async function (domain: string) {
    return await fetch(domain + "/points")
        .then((response) => response.json());
}

const points = get_points(domain);

console.log(points);

