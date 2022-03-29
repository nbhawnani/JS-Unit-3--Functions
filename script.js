function ShowName(greeting, first, last) {
alert(greeting + " " + first + " " + last);
//console.log(greeting + " " + first + " " + last);
  /*
Sample code to be commented out
  */
}

//ShowName("Hiya! ","Nisha", "Brijesh");

// Function to concatenate 2 values accepted as parameters:
/*
function join2Strings(message, value){
  console.log(message + " " + value );
  
}

let msg=''
let val=''
msg=prompt('Enter your message:');
val=prompt('Enter your value:');

join2Strings(msg,val);
*/

// Invoking a function via a variable. using return command in the function.

function getMyNumber(number) {
return "718" + number;
}

/*
let myNumberWithAreaCode = getMyNumber("567-9000");
console.log(myNumberWithAreaCode);
*/

//console.log(typeof(getMyNumber)); // function

/*
// Arrow functions:
// setInterval and clearInterval commands :
let counter = 5
let countDown = setInterval(() => {
console.log(counter)
counter-- //counter=counter-1
if (counter === 0) {
console.log("I have no name!!")
clearInterval(countDown)
}
}, 1000) // interval is specified in milliseconds

*/