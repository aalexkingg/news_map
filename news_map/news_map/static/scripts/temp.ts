import * as fs from 'fs';

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

async function fetchJSON(url: string) {
    try {
        const response = await axios.get(url);

        if (response.status >= 200 && response.status < 300) {
            const data = JSON.parse(response.data);

            //console.log("Response: ", data);
            return data;
        } else {
            console.error("Request failed with status: ", response.status);
        }
    } catch (error) {
        // @ts-ignore
        console.error("Error fetching data: ", error.message);
    }
}
*/
//console.log(points);

//const data = fetchJSON("/points");
//console.log(pointsJSON.default.featureSettings);

//let rawData = fs.readFileSync('../../../../assets/data/countries.json', 'utf8');
//let jsonData = JSON.parse(rawData);
//console.log(jsonData);