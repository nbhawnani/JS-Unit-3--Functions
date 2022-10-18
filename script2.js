



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

//Original method of declaring function
let Happy = function(){
  alert("Happy Birthday!!");
} 

//Arrow function
//let Happy = () => alert("Happy Birthday!!");


let intTimeoutID=setTimeout(Happy,3000)

let counter=10
let countdown = function(){
  console.log(counter);
  counter--;
} 

let intTimeoutID2=setInterval(countdown,1000)
