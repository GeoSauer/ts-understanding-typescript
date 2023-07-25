//* type of object
// const person: {
// 	name: string;
//   age: number;
// }
//* JS object
// const person = {
//   name: "Geo",
//   age: 34,
// };

//* combined to define the tuple on line 17
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Geo",
//   age: 34,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

//* adding enum
//* you could manage these variables manually, but an enum is faster
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//* This creates a global variable who's contents are available to autocomplete for use like on line 56, and if you hover on them you see the number the values are assigned to
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Geo",
  age: 34,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //* TS inference is really cool because it makes method auto-completes better by inferring that the hobby in the console.log will be a string
  // console.log(hobby.map()); <-- ERROR because you can't map strings
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
