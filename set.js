let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);
console.warn("========Adding duplicate element ==========");
setOfNumbers.add(7);
console.log(setOfNumbers); // it will not allow duplicate value.
console.warn("--------Checking number of element in set --------");
 console.log(setOfNumbers.size) ;
console.warn("-------deleting  element 9  ----------------------");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);
console.warn("-----check whether element 7 available in this set -----");
 let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));
// console.warn("=========clear set ============");
// setOfNumbers.clear(); // it will clear the set of element . 
console.warn("------traverse of set =========");
for(const element of setOfNumbers){
    console.log(element);
}
// console.warn("------remove duplicate value ----------");

// let arrayNumbers = [2,3,4,5,6,3,5];
// let arrayUniqueElements =[...new set(arrayNumbers)] ;
// console.log(arrayUniqueElements);

// for (let index = 0; index <arrayOfNumbers.length; index++) {
//     const element = arrayOfNumbers[index];
//     console.log(element );
// }
 



