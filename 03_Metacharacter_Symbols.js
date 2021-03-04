let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
// ^ - Carrot: Must start with
// $ - Money: Must end with
// . - Dot: Any char one time
// * - Asterisk: Any char zero or more time
// ? - Question Mark: Optional char
// \ - Escape char: To escape from symbol
re = /^h/i;
re = /d$/i;
re = /World$/i;
re = /^hello$/i;
re = /^h.llo$/i;
re = /h*llo/i;
re = /gre?a?y/i;
re = /gre?a?y\?/i;

// String to match
// const str = "Hello World";
// const str = "Heello";
const str = "grey?";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
