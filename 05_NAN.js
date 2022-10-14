
var myResult = 0/0;
console.log(0/0);
console.log(typeof myResult);



var myName = "TEST";
console.log(typeof myName);
var myNameString =  +myName
console.log(myNameString, typeof myNameString);


var myAge = "31";
console.log(typeof myAge);
var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);
console.log("=====================================================================================================");

var myAge = "31";
console.log(myAge, typeof myAge);
var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);

var myName = "TEST";
console.log(typeof myName);
var myNameString =  +myName
console.log(myNameString, typeof myNameString);
console.log("=========================================================================");
var operand1 = 100;
var operand2 = 200;
console.log(operand1 + operand2);

var operand1 = "100";
var operand2 = "200";
console.log(operand1 + operand2);
// atomtic conversion
console.log(operand1 ==100);
console.log("===== Implicit conversion===================");
console.log("4"-true); // 4-1

var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);
