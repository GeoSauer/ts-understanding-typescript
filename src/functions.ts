//* if you hover on the function name, at the end it lists the inferred return type
//* if you added .toString() to number1 and number2 in the return, the inferred return type would be string
//* it can also be manually be set which can catch errors, but it should generally be left alone for TS to infer
function add(num1: number, num2: number) {
  return num1 + num2;
}
//* if a function doesn't return anything it's return type is void
function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

printResult(add(5, 12));

//* since printResult's return type is void, console.logging the whole thing returns the console.log from printResult followed by undefined
console.log(printResult(add(5, 12)));

//? THE FUNCTION TYPE
//* the snippet below shows using a variable to point at a function and then calling that variable as function
//* the issue is that if you just type 'let combineValues', the default type is 'all' since it's unspecified, and if you were to say 'combineValues = 5' you wouldn't get a TS error but you'd get a runtime error saying that 5 is not a function
//* that's why you'd need to explicitly declare combineValues as a function type
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  //* this actually won't do anything because when we defined the cb types on line 12 we explicitly said that it would return void, which will just ignore anything that it returns
  return result;
});
