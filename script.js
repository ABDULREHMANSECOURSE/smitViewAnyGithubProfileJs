// fetch('https://api.github.com/users/abdulrehmansecourse')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Handle the fetched data
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error); // Handle any errors
//   });
  const usernameInput = document.getElementById('username');
  const searchButton = document.getElementById('searchButton');
  function searchFunc(username) {
    const userProfile = document.querySelector('.userProfile');
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      const avatarUrl = data.avatar_url;
      const name = data.name;
      const username = data.login;
      const email = data.email;
      const link = data.html_url;
      const repos = data.public_repos;
      const followers = data.followers;
      const following = data.following;
      const bio = data.bio;

      if(avatarUrl){
        userProfile.innerHTML += `<img src="${avatarUrl}" alt="Avatar">`;
      }
      if(name){
        userProfile.innerHTML += `<label for="name">NAME : <h2>${name}</h2></label>`;
      }
      if(username){
        userProfile.innerHTML += `<label for="username">USERNAME : <h2>${username}</h2></label>`;
      }
      if(email){
        userProfile.innerHTML += `<label for="githubLink">GITHUB LINK : <a href="${email}">${email}</a></label>`;
      }
      if(repos){
        userProfile.innerHTML += `<label for="repos">Repos : ${repos}</label>`;
      }
      if(followers || following){
        userProfile.innerHTML += `<div class="followersFollowing">
            <label for="followers">Followers : ${followers}</label>
            <label for="following">Following : ${following}</label>
        </div>`;
      }

      if(link){
        userProfile.innerHTML += `<label for="githubLink">GITHUB LINK : <a href="${link}">${link}</a></label>`;
      }
      
      if(email){
        userProfile.innerHTML += `<label for="email">EMAIL : <h4>${email}</h4></label>`;
      }
      if(bio){
        userProfile.innerHTML += `<label for="bio">BIO : <p>${bio}</p></label>`;
      }
      if (!username) {
      userProfile.innerHTML = `<p>Please enter correct a username</p>`;
    }
    })
  }
  searchButton.addEventListener('click', () => {
    const username = usernameInput.value;
    searchFunc(username);
    usernameInput.value = '';
    document.querySelector('.inputButton').style.display = 'none';
    document.querySelector('.userProfile').style.display = 'flex';
  });