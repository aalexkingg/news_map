

const get_points = async function() {
    return await fetch("/points")
        .then((response) => response.json());
};

const points = get_points();

console.log(points);

