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
``