interface User {
  readonly dbId: number;
  email: string;
  userID: number;
  googleId?: string; // This is how to say If Something is optional
  // startTrial:()=> string // A function which will return string
  startTrial(): string; // A function which will return string
  // both are correct
  getCoupon(coupon:string):number;
  isChunni : boolean;
}
// We Can Do this Too Reopening of the interface
interface User {
  githubToken : string
}

interface Admin extends User{
  role:"admin"|"learner"
}

const gyan: Admin = {
  dbId: 1223,
  email: "gyan@gmail.com",
  userID: 2211,
  startTrial: () => {
    return "Hello";
  },
  getCoupon:(coupon : "gyanhumain")=> {
    const newC = coupon;
    return 3;
  },
  githubToken:"hjfdvhjl",
  role:"admin",
  isChunni:true
};

//difference btw interface and type is only about how we combine two types or interfaces 
