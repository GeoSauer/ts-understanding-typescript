"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Geo";
if (typeof userInput === "string") {
    userName = userInput;
}
//* adding 'never' as the explicit return type is more of a way to illustrate your intention to others that may read your code than a functional addition
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred", 500);
//# sourceMappingURL=app.js.map