let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type admin = {
  username: string;
  id: number;
};

let gyan: User | admin = { name: "Gyan", id: 3344 };
gyan = { username: "admin", id: 3344 };

// function getDBId(id:number | string) :void {
//   console.log(`DB ID IS ${id}`)
// }

function getDBId(id: number | string): void {
  if (typeof id === "string") {
    id.toUpperCase();
  }
  if (typeof id === "number") {
    id = id + 22;
  }
  console.log(`DB ID IS ${id}`);
}

const data:number[]  = [1,2,3,4,5,6];
const data1:string[] = ["1","2","3","4"];
// But What if We Want Both Of string and number The Hehe
const date3:(number | string)[] = ["1","3",2];
getDBId(100);

let pi :3.14 = 3.14; //Extremely Strict Type
