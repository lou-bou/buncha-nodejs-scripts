import { stringify } from "csv-stringify";

const API_URL = 'https://randomuser.me/api/';

async function createDB() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
        console.log(data.results);
    } catch (err) {
        console.log(err);
    }

    console.log("");
    console.log("TERMINATED.");
}

createDB();