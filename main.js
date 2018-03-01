let json = process.argv.slice(2).pop() || "./input.json";
debugger;
let input = require(json);
let DTable = require('@alu0100886306/dtable/src/DTable');
let ColorCell = require("./ColorCell");
let table = new DTable();
console.log(table.drawAllTable(input));
