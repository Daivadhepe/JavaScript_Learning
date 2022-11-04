
`use strict`
function display(name, ...myName) { //first pass normal arg and then pass rest arg
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true);
console.warn("------------------------------------------------------");
function  divide(x,y=1) { // any bydefolt  value pass there string/ number
    console.log(x/y);
}
divide(10);
divide(5,7);