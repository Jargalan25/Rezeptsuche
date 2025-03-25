const arr = [23, 44, 55];
let myFunction = (a) => {
  console.log("too: " + a);
};

const arr2 = [...arr, 12, 98];

myFunction(arr2[1]);
