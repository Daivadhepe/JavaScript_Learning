//  let variable_name ="value";
// let mohitPerson = {
//     fullName:"Sachin Tendulkar",
//     age:24,
//     "isMarride":true
// }
//     console.log(object.entries(mohitPerson)) ;
//     console.log(object.keys(mohitPerson));
//     console.log(object.values(mohitPerson));


let objectSachin  = {
fullName:"Sachin Dhepe",
city:"PUNE",
age:42,
isMarride:true,
address: {
    street:"AS CLUB",
    pin_code:123456,
    city:"PUNE",
    state:"MH",
},
eat:function(){
    console.log("I am vegetarian");
},
walk:function(){
    console.log("I do walk everyday");
},
details:function(){
    let persondetails=`Details are : ${this.fullName},${this.age},${this.details.address}`;
    return persondetails
},

}
 let isAvalable="city" in "PUNE";
   console.log(isAvalable);

  let pDetails =objectSachin.details();
 console.log( pDetails);
console.log(typeof objectSachin );
 console.table(objectSachin.address);
 
 objectSachin.eat();
 objectSachin.walk();

// let address={
//     street:"AS CLUB",
//     pin_code:123456,
//     city:"PUNE",
//     state:"MH",
// }
objectSachin.pinCode=123456; 
delete objectSachin.age
objectSachin.fullName="Sachin Mohit Dhepe";
objectSachin.professio="Angular Developer";
console.table(objectSachin);


console.log(objectSachin);
 let sachinCity = objectSachin.city;
//  console.log(sachinCity);
 console.log(objectSachin.city);
  
 

let collegeAbc = {

}
console.log( collegeAbc);