// From Here On We will Learn about Classes...
// Not a Correct but also a way to Write TypeScript
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Boisar"; //Now gyan.city is not accesible AnyWhere....
//   //this.city is only accessible in class
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
//
// const gyan = new User("gyan@gmail.com", "Gyanranjan");
//
// gyan.city = "Boisar";
// This is more Precise and proffesional way
class User {
  //this.city is only accessible in class
  protected _courseCount = 1
  constructor(
    public email: string,
    private name: string,
  ) {
    this.email = email;
    this.name = name;
  }

  get getAppleEmail():string{
    //getters are Used To Get Any Properties...
    return `apple${this.email}`
  }
  get courseCount():number{
    return this._courseCount
  }
  set courseCount(courseNum){ //There is no Type Allloted With Setters
    if (courseNum <=1) {
      throw new Error("Couse Count Should be Greater than1....");
    }
    this._courseCount = courseNum;
  }
}
//Difference between getters and setters
//
//getters : 
//A getter is a function that is used to retrieve the value of a property. 
//It is defined using the get keyword followed by the property name.
//When you access the property using dot notation or bracket notation,
//the getter function is automatically called to provide the value.
//
//Setters:
//
// A setter is a function that is used to set the value of a property. 
// It is defined using the set keyword followed by the property name.
// When you assign a value to the property using the assignment operator, 
// the setter function is automatically called with the assigned value.
//
const gyan = new User("gyan@gmail.com", "Gyanranjan");
class subUser extends User{
  //Now This Class Wont be able To Access Private Class
  //But  Can Access protected Class if Any Method Is Defined in parent Class using protected
  //KeyWord then
  //the Class Which Inherits Parent Class Can Access it that property.. 
  isFamily:boolean = true;
  // We Can Use this keyword Only Under The Function...
  changeCourseCount(){
    this._courseCount = this._courseCount +1;
    console.log(this._courseCount);
  }
}
// gyan.city = "Boisar";
