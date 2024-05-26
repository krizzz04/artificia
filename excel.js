const xlsx = require('xlsx');

const data = {
  "username": "4dm21ai010",
  "email": "arjuntp@gmail.com",
  "subjects": {
    "aiml": {
      "ia1": { "marks": 27, "attendance": 85 },
      "ia2": { "marks": 25, "attendance": 80 },
      "ia3": { "marks": 29, "attendance": 78 }
    },
    "atcd": {
      "ia1": { "marks": 22, "attendance": 50 },
      "ia2": { "marks": 30, "attendance": 90 },
      "ia3": { "marks": 30, "attendance": 90 }
    },
    "dbms": {
      "ia1": { "marks": 22, "attendance": 80 },
      "ia2": { "marks": 8, "attendance": 86 },
      "ia3": { "marks": 30, "attendance": 90 }
    },
    "rmip": {
      "ia1": { "marks": 30, "attendance": 90 },
      "ia2": { "marks": 30, "attendance": 90 },
      "ia3": { "marks": 30, "attendance": 90 }
    },
    "cn": {
      "ia1": { "marks": 30, "attendance": 90 },
      "ia2": { "marks": 30, "attendance": 90 },
      "ia3": { "marks": 30, "attendance": 85 }
    }
  },
  "name": "Arjun TP"
};

// Prepare data for the worksheet
const rows = [
  ["Username", "Email", "Name", "Subject", "IA1 Marks", "IA1 Attendance", "IA2 Marks", "IA2 Attendance", "IA3 Marks", "IA3 Attendance"]
];

for (const subject in data.subjects) {
  const ia1 = data.subjects[subject].ia1;
  const ia2 = data.subjects[subject].ia2;
  const ia3 = data.subjects[subject].ia3;
  rows.push([
    data.username,
    data.email,
    data.name,
    subject.toUpperCase(),
    ia1.marks,
    ia1.attendance,
    ia2.marks,
    ia2.attendance,
    ia3.marks,
    ia3.attendance
  ]);
}

// Create a new workbook and a new worksheet
const wb = xlsx.utils.book_new();
const ws = xlsx.utils.aoa_to_sheet(rows);

// Append the worksheet to the workbook
xlsx.utils.book_append_sheet(wb, ws, "Marks");

// Write the workbook to a file
xlsx.writeFile(wb, "marks.xlsx");

console.log("Excel file created successfully.");
