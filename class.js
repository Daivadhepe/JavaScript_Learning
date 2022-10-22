
 class Person{
    // fullName
    // city
    // age
    // gneder
    constructor(myName,myCity, myAge,myGneder){
        this.fullName=myName;
        this.city=myCity;
        this.age=myAge;
        this.gneder=myGneder;
    }
    details(){
        console.log(` Person Details: ${this.fullName} ${ this.city} ${ this.age} ${this.gneder}`);
    }
 }
 let sachin =  new Person("Sachin Tendulkar","pune",45,"Male");
 let rohit =  new Person("Rohit Sharma","Mumbai",32,"Male");
console.table( typeof sachin);
console.table(rohit);
 sachin.details();
// class stunt{
//     constructor(rollNo,schoolName){
//         this.rollNo=rollNo;
//         this.schoolName=schoolName
//     }
// }
// let s1 = 

