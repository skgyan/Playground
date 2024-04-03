function thankYouTag(strings, greeting) {
    console.log(strings, greeting);
}

const greeting = 'Thank you';

thankYouTag`Thank you ${greeting}!`; // similar to thankYouTag(['Thank you ', '!'], greeting)

// `Thank you ${greeting}!` - turns into an array of strings breaked by the $ sign
// ['Thank you ', '!'] - // expression also get omitted and passed as a parameter to tagged templates literal

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`; //["That ", " is a ", "."], "Mike", 28

console.log(output);
// That Mike is a youngster.

console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function tag(strings) {
    console.log('-------- strings -----------');
    console.log(strings);
    console.log('-------- strings[0] -----------');
    console.log(strings[0]);
    console.log('-------- strings.raw[0] -----------');
    console.log(strings.raw[0]);
  }
  
  tag`string text line 1 \n string text line 2`;
  // Logs "string text line 1 \n string text line 2" ,
  // including the two characters '\' and 'n'