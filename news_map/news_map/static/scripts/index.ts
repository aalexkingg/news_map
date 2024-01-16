

async function get_points() {
    return await fetch("/points")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return JSON.stringify(response.body);
        });
}

const points = get_points();

console.log(points);

