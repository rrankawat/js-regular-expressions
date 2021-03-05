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

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an `a` or `e`
re = /[GF]ray/; // Must be an `G` or `F`
re = /[^GF]ray/; // Must be anything, except `G` or `F`
re = /^[GF]ray/; // Must start with `G` or `F`
re = /[A-Z]ray/; // Match any uppercase
re = /[a-z]ray/; // Match any lowercase
re = /[A-Za-z]ray/; // Match any letter
re = /[0-1]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} times
re = /Hel{2, 4}o/i; // Must occur between {m, n} times
re = /Hel{2,}o/i; // Must occur at least {m,} times

// Parentheses () - Grouping
re = /([0-9]x){3}/;
re = /^([0-9]x){3}$/;

// String to match
const str = "3x3x3x";

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
