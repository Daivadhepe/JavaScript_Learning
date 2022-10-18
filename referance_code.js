// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
    console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable = "aeiou";
       var vowelUpperCase = "AEIOU";
       var vowelsCount=0;
       for (let index = 0; index < myString.length; index++) {
          var char =  myString.charAt(index);
          var isLowerAvailable =  vowelsLoweCase.includes(char);
          var isUpperAvailable =  vowelUpperCase.includes(char);
   console.log("============================");
   function evenPositionedChars(myString){ 
    console.log("Hard work always pays back");
   }

       for (let index = 0; index < myString.length; index++) {
          // console.log(index%2==0);
          var chh = myString.charAt(index);
          if (index%2==0 && chh!=" ") {
             console.log(chh);
          }
          //var chh = myString.charAt(index);
           
       }
   }
//    evenPositionedChars("Hard work always pays back");
   
