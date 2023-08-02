// bad practice
// Avoid This Because It is Not Type Checked
// let hero ; 
//
// function getHero(){
//   return "Gyan";
// }
// hero = getHero();
//
// Now It is a Good Practice
// let hero : String ; 
//
// function getHero(){
//   return "Gyan";
// }
// hero = getHero();
//

// Bad Practice

// function addTwo(num){
//   return num + 2;
// }
//
// addTwo(5);
//
// Good Boy Method
function addTwo(num : number){
  return num + 2;
}

addTwo(5);
// In typeScript Default Value Must Be Provided while Passing The Function
function SignUp(name :String  , Email: String , Password  = "I Love You Robin" ){


}

SignUp("Sunny","Sunny@gupta.com");

const heelo = {
  name:"Gyan",
  time:"10"
}
