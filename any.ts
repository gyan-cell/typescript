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
// function addTwo(num : number){
//   return num + 2;
// }
//
// addTwo(5);
// // In typeScript Default Value Must Be Provided while Passing The Function
// function SignUp(name :String  , Email: String , Password  = "I Love You Robin" ){
//   console.log(name,Email,Password);
// }
//
// SignUp("Gyan","Jha07944@gmail.com");
//
//
// Bad Boy Method
// function addTwo(num : number){
//   return "Hello";
//   // return num + 2;
// }

// function addTwo(num: number): number {
//   // Good Boy Method
//   return num + 2;
// }

// In typeScript Default Value Must Be Provided while Passing The Function
function getVale(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "Hahaha";
};

const heros = ["Thor", "SpiderMan", "Batman", "Flash"];

// heros.map((Hahaha) =>{
//   return `Hero is ${Hahaha}`
// })
heros.map((Hahaha): string => {
  console.log(`Hero is ${Hahaha}`);
  return `Hero is ${Hahaha}`;
});

// Another Good Practice
//
function consoleError(errMsg:string):void{
  console.log(errMsg);
}

function handleError(errMsg:string):never{
  throw new Error(errMsg);
}
