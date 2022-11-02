const person = {
    name: "Mohit",
    rollNo : 1234
}
Object.freeze(person);

person.name = "Mohit Sharma";// Modification not considered as person object is freezed
person.street = "AS CLUB"; // Adding new property is not considered as person object is freezed
console.log(person);
console.log("--------------array freezing ----------------");
const arrayNumbers= [2,4,5,6,7];
// arrayNumbers = [ ];
Object.freeze( arrayNumbers); //Immutable : we can not change  the  values after creation  or  defining .
// arrayNumbers.push(99); not allowed as object freezed
console.log(arrayNumbers);
console.log("------------const deep  cloning -----------");
const student = {
    name: "Mohit",
    rollNo : 1234
}
const address = {
    city:"Pune",
    streer:"AS CLUB"
}

let studentClone = Object.assign({}, student); // deep cloning will be perform
studentClone.name = "Mohit Sharma";
console.log(studentClone);
console.log(student);
console.warn("---------marge  object --------------------------- ");
let mergedObject =  Object.assign({},student , address);
console.log(mergedObject);

