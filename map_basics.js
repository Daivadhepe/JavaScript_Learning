let map = new Map();
map.set(22,"Sachin");
map.set(11,"Dravid");
map.set(33,"Gaungully");
map.set(77,"Sachin");
console.warn("------Adding duplicate key ----------");
map.set(11,"Gautam");//this key and value override on 11 , dravid.
console.log(map);
console.warn("------Retrieving  value ---------------");
let value = map.get(33);
console.log(value);
console.log(map.get(99));//this key is not available in set .
console.warn("------deleting map value -----------");
map.delete()
console.warn("------is key available --------------");
map.has(77);
console.warn("------Traversing over map collection ---------");
let setOfkeys = map.keys();
console.log(setOfkeys);
for(const key of setOfkeys){
    console.log(map.get(key));
}
console.warn("=============================================");
class Person {
    constructor(rollNo, fullName, city, age, gender){
        this.rollNo = rollNo;
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person(22,"Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person(44, "Billgates", "USA", 67, "Male");

let mapOfPersons = new Map();
mapOfPersons.set(22, personAnil);
mapOfPersons.set(33, personAnita);
mapOfPersons.set(44, personBill);

let mapKeys = mapOfPersons.keys(); // 22   33   44
for (const key of mapKeys) {
     let personObject = mapOfPersons.get(key);
     personObject.details();

}









