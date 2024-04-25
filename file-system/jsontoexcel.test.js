const fs = require('fs-extra');
const path = require('path');
const { readJson, writeToExcel } = require('./jsontoexcel'); // Import functions to be tested

// Mock data
const jsonData = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
];

// Mock file paths
const jsonFilePath = path.join(__dirname, 'mydata.json');
const excelFilePath = path.join(__dirname, 'output.xlsx');

// Mock fs-extra methods
jest.mock('fs-extra', () => ({
    readJson: jest.fn().mockResolvedValue(jsonData),
}));

// Mock XLSX methods
jest.mock('xlsx', () => ({
    utils: {
        json_to_sheet: jest.fn(),
        book_new: jest.fn(),
        book_append_sheet: jest.fn(),
        writeFile: jest.fn(),
    },
}));

describe('readJson', () => {
    it('should read JSON data from file', async () => {
        const data = await readJson(jsonFilePath);
        expect(data).toEqual(jsonData);
        expect(fs.readJson).toHaveBeenCalledWith(jsonFilePath);
    });

    it('should throw an error if file reading fails', async () => {
        fs.readJson.mockRejectedValue(new Error('File read error'));
        await expect(readJson(jsonFilePath)).rejects.toThrow('File read error');
    });
});

describe('writeToExcel', () => {
    it('should write JSON data to Excel file', async () => {
        await writeToExcel(jsonData, excelFilePath);
        expect(fs.writeFile).toHaveBeenCalledWith(expect.anything(), expect.anything());
    });

    it('should throw an error if writing to Excel file fails', async () => {
        fs.writeFile.mockRejectedValue(new Error('File write error'));
        await expect(writeToExcel(jsonData, excelFilePath)).rejects.toThrow('File write error');
    });
});
