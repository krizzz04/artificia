const xlsx = require('xlsx');
const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'yourDatabaseName';
const client = new MongoClient(url);

// Read the Excel file
const workbook = xlsx.readFile('~$marks.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert Excel data to JSON
const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

const headers = data[0];
const rows = data.slice(1);

const students = rows.map(row => {
  let student = {};
  headers.forEach((header, index) => {
    const keys = header.split('.'); // Assuming header keys are in dot notation
    let temp = student;
    for (let i = 0; i < keys.length - 1; i++) {
      temp[keys[i]] = temp[keys[i]] || {};
      temp = temp[keys[i]];
    }
    temp[keys[keys.length - 1]] = row[index];
  });
  return student;
});

// Insert JSON data into MongoDB
async function insertData() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    const collection = db.collection('marks');
    const result = await collection.insertMany(students);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

insertData();
