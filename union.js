var score = 33;
score = 44;
score = "55";
var gyan = { name: "Gyan", id: 3344 };
gyan = { username: "admin", id: 3344 };
// function getDBId(id:number | string) :void {
//   console.log(`DB ID IS ${id}`)
// }
function getDBId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    if (typeof id === "number") {
        id = id + 22;
    }
    console.log("DB ID IS ".concat(id));
}
getDBId(100);
