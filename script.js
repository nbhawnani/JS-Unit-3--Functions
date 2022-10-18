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
console.log("The sum is:",answer)

console.log(typeof(Add2Num)); // function

//Declaring a function with no parameters
function Hello(){
  console.log("Hi Class! how are you doing today?")
}

Hello();

//sending arguments based on user response
//Function declaration
function sayHello(firstlastname) {
alert("Hello " + firstlastname);
}

let strName=prompt("Enter your name:")
//Invoking the function with arguments
sayHello(strName);
