import readline from 'node:readline';
import { createCSV } from './generator.mjs';

function createURL(country) {
    country = country.replace(/\s/g, "+"); // replace whitespace with +
    return `http://universities.hipolabs.com/search?country=${country}`;
}

async function getUnis(url, country) {
    try {
        console.log(`\nFetching all universities in ${country}...`);
        const res = await fetch(url);
        const data = await res.json();
        if (data.length > 0) {
            createCSV(data, country);
        } else {
            console.log("\nNo such country.");
        }
    } catch (e) {
        console.log(e);
    }

    console.log(`\nCSV file for universities in ${country} generated.`)
    console.log("\nTERMINATED.");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Choose a country: `, async input => {
    const API_URL = createURL(input);
    await getUnis(API_URL, input); // wait for API_URL to be assigned the user input
    rl.close();
});