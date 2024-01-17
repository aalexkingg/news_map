import axios from 'axios';
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
async function fetchJSON(url: string): Promise<void> {
    try {
        const response = await axios.get(url);

        if (response.status >= 200 && response.status < 300) {
            const data = JSON.parse(response.data);

            console.log("Response: ", data);
        } else {
            console.error("Request failed with status: ", response.status);
        }
    } catch (error) {
        // @ts-ignore
        console.error("Error fetching data: ", error.message);
    }
}

//const points = get_points();

//console.log(points);

fetchJSON("/points");