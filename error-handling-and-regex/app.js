let re;
re = /hello/;
re = /hello/i;
re = /hello/g;
re = /hello/ig;
// The 'i' is a flag indicating the regex should be
// case insensitive.
// 'g' indicates global search, i.e. do not stop after
// the first match.

// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hihellothj there world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() – Returns true or false
// const result = re.test('Hello world');
// console.log(result);

// match() – Return result array or null
// const str = 'Well Hello there, hello!'
// const result = str.match(re);
// console.log(result);

// search() – Returns index of first match. If no match, returns -1.
// const str = "Well Hello there, hello"
// const result = str.search(re);
// console.log(result);

// replace() – Return a new string with some or all matches of a pattern
const string = "Hello there, hello!";
const newString = string.replace(re, 'Hi');
console.log(newString);