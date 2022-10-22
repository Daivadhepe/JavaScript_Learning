 
function Person(fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
Person.prototype.country = "India";
let sachin  = new Person("Sachin Tendulkar", "Surat", 45, "Male");
console.table(sachin);

let sharma = new Person("Rohit Sharma", "Pune", 32, "Male");
console.table(sharma);
let riya = new Person("Riya" , "Kolhapir",22,"Female");
let sona = new Person("Sona","Mumbai",19,"Female");
console.log(sachin.country);
console.log(riya.country)



let myString = "DEVELOPER";
myString.charAt();
myString.concat();
  