// he identity function is a function that will return back whatever is passed in.
// You can think of this in a similar way to the echo command.
// Without generics, we would either have to give the identity function a specific type:
function identity(arg: number): number {
  return arg; // This is An example Of identity Function
}

// Or We Can Use Any Keyword
function identity2(args: any) {
  return args;
}

// While using any is certainly generic in that it will cause the
// function to accept any and all types for the type of arg,
// we actually are losing the information about what that type was when the function returns.
// If we passed in a number, the only information we have is that any type could be returned.
// Instead, we need a way of capturing the type of the argument
// in such a way that we can also use it to denote what is being returned.
// Here, we will use a type variable,
// a special kind of variable that works on types rather than values.
//
const score: Array<number> = [];

const names: Array<string> = [];

function identity3<Type>(val: Type): Type {
  return val; // Correct Way
}
//Also Correct But Minimal Syntax way
function identity4<T>(val: T): T {
  return val;
}

interface bottle {
  brand: string;
  number: number;
}
identity4(<bottle>{}); // Creating Our Default Types And Using it

// Taking Input Of An Array And Returning it
function getSearchProducts<T>(array: T[]): T {
  // Do Some Database Operration
  const myIndex = 3;
  return array[myIndex];
}

// Generic Arrow Function 
const getMoreSearchProduct = <T>(products:T[]):T=>{
  //Doing Some Database Operration;;
  const myIndex = 4;
  return products[myIndex];
}
