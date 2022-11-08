const arrayNumbers= [2,3,4,5,6,];
console.log(arrayNumbers);
let newArray= arrayNumbers.filter((element)=>{
return element >=4;//false false
});
console.log(newArray);


console.warn("---------reduce ----------");
 let sum=arrayNumbers.reduce((value,runningTotal)=>{
return value+runningTotal
},100);//inisial value 
console.log(sum);




