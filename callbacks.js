function do_assignment(callback,callback_amar){ //Prashant
    console.log("I am doing assignment and it is done now ....");
 callback();
 callback_amar();
}
function  copy_assignment () { //Rohit
    console.log("Hey  bro ... Thank you. Let me copy");
}

function  copy_assignment_amar () { //Amar
    console.log("Hey  bro ... Thank you so much . Let me copy");
}
do_assignment(copy_assignment,copy_assignment_amar);
console.warn("----------set interval function ----------");
function  display () {
    console.log("Display function");
}
setInterval(display,2000);
// console.warn("-----setTimeout -----------------------");
// setTimeout(display,2000);








