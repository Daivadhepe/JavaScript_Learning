


console.warn("-----simple function ----------");
let show = function (n1,test){
    console.log("hi");
}
show(10,"Daiva");
console.warn("------forEach loop / method ---------");
const arrayNumbers= [10,20,30,40,20,10];
arrayNumbers.forEach(function  ( currentValue,index,array) {
    console.log(currentValue,index,array);
})
console.warn("-----arrow function ---------");
const arrayNumbers1= [10,20,-30,40,-20,10];
arrayNumbers1.forEach( ( currentValue,index,array)=>{
    if (  currentValue<0) {
        console.log(currentValue,index,array)
    }
   } ) // index and array is that optional  // without {} arrow function likh skhte ho
   
console.warn("-----Traversing set using foreach loop------");
const setOfNumbers= new Set(arrayNumbers);
setOfNumbers.forEach((value)=>{
    console.log(value);
});
console.warn("---------traversing map using forEach loop-------");

let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );

