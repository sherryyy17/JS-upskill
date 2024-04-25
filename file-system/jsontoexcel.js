const fs = require('fs-extra');
const xlsx = require('xlsx');
const path = require('path');

// Read JSON data from file
async function readJson(filename) {
    try {
        const jsonData = await fs.readJson(filename);
        return jsonData;
    } catch (err) {
        console.error('Error reading JSON file:', err);
        throw err;
    }
}

// Write JSON data to Excel file
async function writeToExcel(data, excelFilename) {
    try {
        const ws = xlsx.utils.json_to_sheet(data);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
        xlsx.writeFile(wb, excelFilename);
        console.log(`Data successfully written to ${excelFilename}`);
    } catch (err) {
        console.error('Error writing to Excel file:', err);
        throw err;
    }
}

(async () => {
    const jsonData = await readJson(path.join(__dirname,'mydata.json'));
    await writeToExcel(jsonData, path.join(__dirname,'output.xlsx'));
})();
