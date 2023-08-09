"use strict";
//InterFaces Are There to make sure When Used Certain properties are Applied...
//We Can Add more But No Less
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = "Front";
    }
}
class Youtube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("Hello Story..");
    }
}
