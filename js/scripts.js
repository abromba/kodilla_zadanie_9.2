var femaleNames = ['Asia', 'Basia', 'Cecylia', 'Dorota', 'Ela', 'Fela'];
var maleNames = ['Adam', 'Bolek', 'Celestyn', 'Daniel', 'Erazm', 'Filip'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian'

if (allNames.indexOf(newName) === -1 ){
    allNames.push(newName);
}

console.log(allNames);