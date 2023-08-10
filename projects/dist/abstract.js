"use strict";
class TakePhoto {
    //We Can Use Methods Only not data
    constructor(cameraMode, filter, val) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.val = val;
        this.cameraMode = "front";
        this.filter = "none";
        this.val = val;
    }
    changeMode(val) {
        this.cameraMode = val;
    }
    getReelTime() {
        return 8; //We Can Only Do This Thing in abstract class
    }
}
// This Method Fails
// const gyan1= new TakePhoto("Test","Test")
//In interface We can Create Method Defination....
//In summary, constructors in JavaScript are fundamental for creating and initializing objects,
//setting up inheritance chains, and organizing your code in an object-oriented manner.
class Instatgram extends TakePhoto {
    constructor(cameraMode, filter, burst, val) {
        super(cameraMode, filter, val); //Passing The Value To The Parent Class..
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.val = val;
    }
    hello() {
        console.log("Hello ..");
    }
}
const gyan1 = new Instatgram("hello", "haha", 12, "back");
gyan1.changeMode("front");
