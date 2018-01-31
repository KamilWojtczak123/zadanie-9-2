// scripts.js
var femaleNames = ['Amanda', 'Samanta', 'Jessica', 'Fiona'];
var maleNames = ['Piotrek', 'Grzesiek', 'Leszek', 'Jacek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}