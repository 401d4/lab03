'use strict';

const fs = require('fs');

let readData = [];

fs.readFile('./data/person.json', (err, data) => {
  if (err) throw err;
  readData.push(JSON.parse(data));
  changeData(readData);
  let newData = JSON.stringify(readData[0]);
  saveData(newData);
});

function changeData(readData) {
  readData[0].firstName = 'Jacob';
  readData[0].lastName = 'Wendt';
  readData[0].hair.type = 'short';
  readData[0].hair.color = 'blonde';
  readData[0].favoriteFoods = 'burger';
  readData[0].married = false;
  readData[0].kids = 0;
}

function saveData(data) {
  fs.writeFile('./data/person.json', data, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  }); 
}
