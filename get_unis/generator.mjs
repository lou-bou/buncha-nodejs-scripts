import { stringify } from 'csv-stringify/sync';
import { writeFileSync } from 'node:fs';

export function createCSV(data, country) {
    const content = stringify(data);
    writeFileSync(`csv_output/${country}.csv`, content, 'utf8', function(e) {
        if (e) {
            console.log("Error: ", e);
        }
    });
}