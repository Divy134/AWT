class UI {
    constructor() {
      this.profile = document.getElementById("profile");
    }
    showProfile(user) {
      // console.log(user);
      const date = new Date(user.created_at);
      this.profile.innerHTML = `
  <div class="card card-body mb-3">
  <div class="row">
  <div class="col-md-3">
  <img class="img-fluid mb-2" src="${user.avatar_url}">
  <a href="${
        user.html_url
      }" target="_blank" class="btn btn-primary btn-block">View
  Profile</a>
  </div>
  <div class="col-md-9">
  <span class="badge badge-info">Public Repos: ${user.public_repos}</span>
  <span class="badge badge-info">Public Gists: ${user.public_gists}</span>
  <span class="badge badge-info">Followers: ${user.followers}</span>
  <span class="badge badge-info">Following: ${user.following}</span>
  <br><br>
  <ul class="list-group">
  <li class="list-group-item">Company: ${user.company}</li>
  <li class="list-group-item">Blog: ${user.blog}</li>
  <li class="list-group-item">Location: ${user.location}</li>
  <li class="list-group-item">Member Since:
  ${date.toLocaleDateString()}</li>
  </ul>
  </div>
  </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div. id="repos"></div>
  `;
    }
    // Show user repos
    showRepos(repos) {
      let output = "";
      repos.forEach((repo) => {
        output += `
  <div class="card card-body mb-2>
  <div class ="row">
  <div class="col-md-6">
  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
  </div>
  <div class="col-md-6">
  <span class="badge badge-primary">Public Stars:
  ${repo.stargazers_count}</span>
  <span class="badge badge-info">Public Watchers:
  ${repo.watchers_count}</span>
  <span class="badge badge-warning">Public Forks:
  ${repo.forks_count}</span>
  <span class="badge badge-success">Primary Language:
  ${repo.language}</span>
  </div>
  </div>
  </div>
  `;
      });
      document.getElementById("repos").innerHTML = output;
    }
    showAlert(message, className) {
      this.clearAlert();
      const div = document.createElement("div");
      div.className = className;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector(".searchContainer");
      const search = document.querySelector(".search");
      container.insertBefore(div, search);
      setTimeout(() => {
        this.clearAlert();
      }, 3000);
    }
    clearAlert() {
      const currentAlert = document.querySelector(".alert");
      if (currentAlert) {
        currentAlert.remove();
      }
    }
    clearProfile() {
      this.profile.innerHTML = "";
    }
  }
  