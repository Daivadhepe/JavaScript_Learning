

const arrayNumbers= ["Anil","Shantanu" ,"Nutan" ,"Suyog","DD","Pradnya"     ];
arrayNumbers.sort();
console.log(arrayNumbers);
console.warn("---------------------------------");
const arrayOfNumbers= [22,36,50,49,63,100];
arrayOfNumbers.sort((first,second)=>{
return(first>second?1:-1)//asssending /decending -ko +krdo
});
console.log(arrayOfNumbers);
console.warn("------------");
