let arrayOfNumbers = [1,3,7,8,9,3,7];
arrayOfNumbers[4]=11;
 console.log(arrayOfNumbers);

console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));
console.log("------------Travels of array---------------------");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
    console.log(element);
}
console.log("-----------------for in loop ---------------------------------------");
for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
console.log("--------------------reverse string------------------------------------");
let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}
console.log("------------- add start position -----------");
let arrayOfNumber = [1,3,7,8,9,3,7];

console.log(arrayOfNumber);
arrayOfNumber.unshift(5);
arrayOfNumber.unshift(5);

console.log(arrayOfNumber);

console.log("-------------shift- remove-------------------");
let array = [11,22,33,44];
console.log(array);
array.shift();
console.log(array);
console.log("------------slice -------------------");
let arrayNumbers = [1,2,3,4,5,6,7,8];
console.log(arrayNumbers);
 let slicedElement=  arrayNumbers.slice(2);
 console.log(slicedElement);
 let slicedValues = arrayNumbers.slice(1,4);
 console.log(slicedValues);
 console.log("------ sir code -----");
 console.log("============ slice() ===========");
let arrayNumbers1 = [1, 3, 7, 8, 9, 3, 7];
let slicedElements =  arrayNumbers1.slice(2);
console.log(slicedElements);
let slicedValues1 = arrayNumbers1.slice(1, 4);
console.log(slicedValues);
console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);

let splicedElements =  array_numbers.splice(4);
console.log(splicedElements);
console.log(array_numbers);

console.log("---------------- sir code ------------------------------");
console.log("============ splice() ===========");
let array_numbers2 = [1, 3, 7, 8, 9, 3];
console.log(array_numbers2);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 array_numbers.splice(2, 1, 22, 44, 66);
 console.log(array_numbers2);
