interface User {
  name1: string;
  email: string;
}

interface Admin {
  name1: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// Instance of Narrowing
//JavaScript has an operator for checking whether or not
//a value is an “instance” of another value.
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};
// Type Casting : A straightforward way to cast a variable is using the as keyword,
// which will directly change the type of the given variable.
// Types Predicate
function isFish(pet: Fish | Bird): pet is Fish {
  // Here We are Making Sure  This
  //Function returns Fish
  return (pet as Fish).swim !== undefined; //Type Casting Here We Are Assigning pet variable
  // As A type of Fish It Only Returns Boolean
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return "Fish Food";
  } else {
    return "Bird Food";
  }
}

// Discriminated Union
//
interface circle {
  kind: "circle"; // Good Practice
  radius: number;
}

interface square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

function isRect(rect: Rectangle): rect is Rectangle {
  return (rect as Rectangle).kind === "rectangle";
}

function rectArea(rect: Rectangle) {
  if (isRect(rect)) {
    let area = 0;
    area = rect.length * rect.width;
    return area;
  }
}
function isCirce(circle1: circle): circle1 is circle {
  return (circle1 as circle).kind === "circle"; // TypeScript type assertion (also known as type casting)
  // to check whether the object circle1 is of a type that matches the circle interface you defined.
}
function cirArea(circle1: circle) {
  if (isCirce(circle1)) {
    const area = circle1.radius ** 2 * Math.PI;
    return area;
  }
}

type shape = circle | square | Rectangle;

function getTrueShape(shape: shape): string {
  if (shape.kind === "square") {
    return "Shape Is square";
  } else {
    return "Shape is Circle or Rectangle";
  }
}

function getArea(shape: shape) {
  switch (shape.kind) {
    case "circle":
      return shape.radius ** 2 * Math.PI;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const __defaultForShape: never = shape;
      return __defaultForShape;
  }
}

// Never keyword
// TypeScript introduced a new type never, which indicates the values that will never occur.

// The never type is used when you are sure that something is never going to occur.
// For example, you write a function which will not
// eturn to its end point or always throws an exception.
