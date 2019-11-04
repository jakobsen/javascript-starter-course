const user = {
  email: 'jdoe@gmail.com'
};

try {
  // Reference Error
  // myFunction();

  // Type Error
  // null.myFunction();

  // Syntax Error
  // eval('Hello World');

  // URI Error
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch(e) {
  console.log(`UserError: ${e.message}`);
  // console.log(e.name);
  // console.log(e.message);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  console.log("This happens no matter what")
}

console.log("Program continues ...");
