//Function declaration
function ShowName(first, last) {
//alert("Hello! " + first + " " + last);
console.log("Hello " + first + " " + last);
  
}
//Invoking the function with arguments
ShowName("Nisha", "Brijesh");

//Function declaration using return statement
function Add2Num(num1, num2) {
  let sum=num1+num2;
  return sum;
}

//Invoking the function with arguments
let answer=Add2Num(1,2);
console.log("The sum is:",answer);

console.log(typeof(Add2Num)); // function

//Declaring a function with no parameters
function Hello(){
  console.log("Hi Class! how are you doing today?");
}

Hello();

/*
//sending arguments based on user response
//Function declaration
function sayHello(firstlastname) {
alert("Hello " + firstlastname);
}

let strName=prompt("Enter your name:")
//Invoking the function with arguments
sayHello(strName);
*/


//Arrow functions - with no return 
/*
let sayHello2 = (firstlastname) => {
  alert("Hello " + firstlastname);
}

let strName2=prompt("Enter your name:")
//Invoking the function with arguments
sayHello2(strName2);
*/


//Arrow function declaration using return statement
let product2Num = (num1, num2) => num1*num2;

//Invoking the arrow function with arguments
let prod=product2Num(10,21);
console.log("The product is:",prod)

//line of code = 1 instruction in javascript that ends with a semi-colon;


//setTimeout
//Original method of declaring function
function Happy(){
  alert("Happy Birthday!!");
} 

let intTimeoutID = setTimeout(Happy,3000)
clearTimeout(intTimeoutID)


//setInterval method
let counter=10
let countdown = () => {
  console.log(counter);
  counter--;
} 

let intTimeoutID2=setInterval(countdown,1000)
clearInterval(intTimeoutID2)