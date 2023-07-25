let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Geo";
if (typeof userInput === "string") {
  userName = userInput;
}

//* adding 'never' as the explicit return type is more of a way to illustrate your intention to others that may read your code than a functional addition
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred", 500);
