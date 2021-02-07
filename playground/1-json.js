const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();

// const data = JSON.parse(dataJson);
// console.log(data.title);

const fileName = '1-json.json';
const testDataBuffer = fs.readFileSync(fileName);
const testData = JSON.parse(testDataBuffer.toString());
testData.name = 'JB';
testData.age = 35;
fs.writeFileSync(fileName, JSON.stringify(testData));


