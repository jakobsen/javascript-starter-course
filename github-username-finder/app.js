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
        console.log(data.profile.message);
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert("User not found", "alert alert-danger");
          ui.clearProfile();
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});