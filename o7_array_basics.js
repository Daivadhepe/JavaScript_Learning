  var arrayOfNumbers = [1,2,3,7,8,9,3,7 ];
  console.log(arrayOfNumbers);
  console.log("----------------------------------");
   var arrayLength = arrayOfNumbers.length;
   console.log(`total number element available in array :-${arrayLength}`);
   console.log("----------------------------------");
   arrayOfNumbers[3];
   console.log(`element  at  3rd Index is :-${arrayOfNumbers[3]}`);
   console.log("----------------------------------");
   arrayOfNumbers[1]=200;
   console.log(arrayOfNumbers);

console.log("----------------------------------");
// arrayOfNumbers[3]=77
console.log(arrayOfNumbers);

// let arrayOfNumbersotherArray = arrayOfNumbers; shallow copy 
    let otherArray= [...arrayOfNumbers];



arrayOfNumbers[3]=44;
console.table();
console.table(otherArray);

