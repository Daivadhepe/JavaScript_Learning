var myName = "Mohit";
// 10 to 0
var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);
console.log("-------------------------------------------------");
// 0+1+2+3+4+5
var add = 0; 


console.warn("Q.1. Reverse String=========================================" );
console.log("");

function reverseString(givenString)
{
   console.log(`Given String is:- ${givenString}`);

   var lenthStr = givenString.length - 1; // 
   var reverseStr = "";
   for (let index = lenthStr; index >= 0; index--) {
      // console.log(myName.charAt(index));
      var char = givenString.charAt(index)
      
       reverseStr = reverseStr + char
   }
   console.log(`Reverse string is :-${reverseStr}`);
}
reverseString("Hard work always pays back")
console.log("");
reverseString("Soon i will be Angular IT champ")
console.log("");