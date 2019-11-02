// Init GitHub
const github = new GitHub;

// Init UI
const ui = new UI;

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
  userText = e.target.value;
  
  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      });
  } else {
    // Clear profile
  }
});