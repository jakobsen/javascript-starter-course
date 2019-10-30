const http = new easyHTTP;

// Get Posts
// const posts = http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// const posts = http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post',
  userID: 4
};

// Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update post
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// })

// Delete post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});