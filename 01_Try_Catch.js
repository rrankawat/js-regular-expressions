const user = { email: "john@gmail.com" };

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce a SyntaxError
  // eval("Hello World");

  // Produce a URIError
  // decodeURIComponent("%");

  // Produce custom error
  if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log("Finally runs regardless of results...");
}

console.log("Program continues...");
