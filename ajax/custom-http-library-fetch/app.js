const http = new EasyHTTP;

// Get users
// const users = http.get("http://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Create User Data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "john@gmail.com"
};

// Create user
// http.post("http://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update user
// http.put("http://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete user
http.delete("http://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));