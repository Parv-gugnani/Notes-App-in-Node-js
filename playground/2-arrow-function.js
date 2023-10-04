//normal
// const square = function (x) {
//   return x * x;
// };

//Arrow function =>
// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(4));

// we dont have well acess to this functoin in arrow function
// we cant use it everywhere
const event = {
  name: " Birthday Party",
  guestList: ["Parv", "none", "good"],
  printGuessList() {
    // const that = this;
    console.log("Guess list for" + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending" + this.name);
    });
  },
};

event.printGuessList();
