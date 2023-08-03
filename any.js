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
function getVale(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "Hahaha";
}
;
var heros = ["Thor", "SpiderMan", "Batman", "Flash"];
// heros.map((Hahaha) =>{
//   return `Hero is ${Hahaha}`
// })
heros.map(function (Hahaha) {
    console.log("Hero is ".concat(Hahaha));
    return "Hero is ".concat(Hahaha);
});
