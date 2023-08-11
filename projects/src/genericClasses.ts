// We Can Have n no. of input
// Ordinary Way
function anotherFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction1<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, "6");
// anotherFunction1(3,'3');//No Bad Boy We Cannot Do That Instead
anotherFunction1(1.1, {
  connection: "Bad Boy Mintu",
  username: "khgfvfdg",
  password: "hgdgh",
}); //The Good boy Way

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  sub: string;
}

class Sellables<T> {
  constructor() {}
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
