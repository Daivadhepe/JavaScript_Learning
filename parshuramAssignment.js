console.log("====================1==================");
var stringHandsOn = " Hey you are doing good, keep it up ";
console.log(stringHandsOn);
console.log("====================2==================");
console.log(`Calculated String length :${stringHandsOn.length}`);
console.log("===================3===================");
var result = stringHandsOn.trim();
console.log(`Remove the extra space : ${result}`);
console.log("===================4=====================");
console.log(`Total No. space removed : ${stringHandsOn.length - result.length}`);
console.log("===================5======================");
console.log(`After trim first character : ${result.charAt(0)}, After trim last character : ${result.charAt(result.length - 1)}`);
console.log("===================6======================");
console.log(`Total words available after trim : ${result.length}`);
console.log("===================7======================");
console.log(`Index of good from given string : ${stringHandsOn.indexOf('good')}`);
console.log("===================8======================");
console.log(`Substring stating from 22 using substring after trim : ${result.substring(22)}`);
console.log(`Substring stating from 22 using slice at given string : ${stringHandsOn.slice(22)}`);
console.log("===================9======================");
console.log(`is string ends with 'up' : ${stringHandsOn.includes('up')}`);
console.log("===================10======================");
console.log(`is trimmed string starts with 'Hey': ${result.includes('Hey')}`);
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("================1=================");
console.log(`'My dream company is "Google"'`);
console.log("================2=================");
var hobby_1 = "Cricket";
var hobby_2 = "Adventure"
var hobby_3 = "Cooking"
console.log(`Hobby 1 : ${hobby_1}`);
console.log(`Hobby 2 : ${hobby_2}`);
console.log(`Hobby 3 : ${hobby_3}`);



console.log(`After concat : ${hobby_1.concat(" ", hobby_2, " ", hobby_3)}`);



console.log("==========================================operator ==============================================================");
var wordLengthSquare = function (square) {
    console.log(`Given word : ${square}`);
    console.log(`length of word : ${square.length}`);
    var wordlength = square.length;
    return wordlength*wordlength;
}
console.log(`Square of word : ${wordLengthSquare("JavaScript")}`);
console.log('==========================================');
console.log(`Square of word : ${wordLengthSquare("Google")}`);
console.log('==========================================');
console.log(`Square of word : ${wordLengthSquare("Developer")}`);
console.log('==================== 2) Done with the help of Google======================');
var stringLine = function () {
    stringLine= "I am Angular Developer";
    console.log(stringLine);
    var splitstring = stringLine.split(" ")
    console.log(splitstring);
    var reversearray = splitstring.reverse();   
    console.log(reversearray);
    var joinarray = reversearray.join(" ")
    console.log(joinarray);
    console.log('==========================================');
   var stringlength = stringLine.length
   console.log(`string total length : ${stringlength}`);
   var totalwords = stringLine.split(" ")
   var totalwordslength = totalwords.length
   console.log(`Total no. of words : ${totalwordslength}`);
   console.log(`stringlength Divided by total no. of word : ${stringlength/totalwordslength}`);
   console.log(`stringlength multiply by total no. of word : ${stringlength*totalwordslength}`);
}

console.log("===============================================ternary operator========================================================");
var greatestNo = function (num1, num2) {
    var result = num1 > num2 ? num1 : num2;
    console.log(`Greater number is : ${result}`);

}
greatestNo(10, -10);
greatestNo(800, 899)
console.log("=====================2=========================");
var evenOddValue = function (num) {
    var result = num % 2 == 0 ? true : false;
    return result;

}
var returnvalue = evenOddValue(29);
console.log(`is value true or false: ${returnvalue}`);
var returnvalue2 = evenOddValue(44);
console.log(`is value true or false: ${returnvalue2}`);
var returnvalue3 = evenOddValue(0);
console.log(`is value true or false : ${returnvalue3}`);
var returnvalue4 = evenOddValue(101);
console.log(`is value true or false: ${returnvalue4}`);
console.log("=====================3=========================");
var evenOddLength = function (word) {
    var resultwordlength = word.length;
    console.log(`word length is : ${resultwordlength}`);
    var iswordEvenOdd = resultwordlength % 2 == 0 ? "EVEN" : "ODD";
    return iswordEvenOdd;
}
var evenOrOdd = evenOddLength("Javascript");
console.log(`is word is even or odd : ${evenOrOdd}`);
var evenOrOdd2 = evenOddLength("developer");
console.log(`is word is even or odd : ${evenOrOdd2}`);
var evenOrOdd3 = evenOddLength("Google");
console.log(`is word is even or odd : ${evenOrOdd3}`);



