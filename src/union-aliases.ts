type Combinable = number | string;
type Conversions = "as-number" | "as-string";

//* here we combined a union type and literal type to basically create a boolean with custom values. This is also a great way to catch typos
function combine(input1: Combinable, input2: Combinable, resultConversion: Conversions) {
  //* when using union types runtime logic is sometimes necessary to handle the different types since the inferring can't do it for you
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + ", " + input2.toString();
  }
  return result;

  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);
