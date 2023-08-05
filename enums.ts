// const AISLE = 0;
// const MIDDLE = 0;
// const WINDOW = 0;
//
enum Choice {
  AISLE,// First Default Value Always Gets 0
  MIDDLE,// Second Value Gets Increment of 1
  WINDOW,// And it Goes on..
  FOURTH = 10,// We can also set Default One..
};

const enum SetChoice {
  AISLE,// First Default Value Always Gets 0
  MIDDLE,// Second Value Gets Increment of 1
  WINDOW,// And it Goes on..
  FOURTH = 10,// We can also set Default One..
}
const hcSeat = SetChoice.AISLE
