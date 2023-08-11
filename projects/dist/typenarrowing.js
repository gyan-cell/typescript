"use strict";
// Suppose We Have A function
function detectType(val) {
    // return val.toLowerCase();// We Are Not Able To use properties of string Because
    // We do not know For Sure if The val is Number or String Instead
    // use Typeof to make extra guard to know Which kind of variable is Comming of
    if (typeof val === "string") {
        return val.toLowerCase(); // See Now We Are Able To use it...
    }
    return val + 10;
}
//Recommeded A Lot
function provideId(id) {
    if (!id) {
        throw new Error("Please Provide The Id...");
    }
    id.toLowerCase();
}
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
    function printAll(strs) {
        // !!!!!!!!!!!!!!!!
        //  DON'T DO THIS!
        //   KEEP READING
        // !!!!!!!!!!!!!!!!
        if (strs) {
            if (typeof strs === "object") {
                for (const s of strs) {
                    console.log(s);
                }
            }
            else if (typeof strs === "string") {
                console.log(strs);
            }
        }
    }
}
