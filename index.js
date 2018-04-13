function searchRepositories() {
  const searchTerms = $("#searchTerms").val();

  $.ajax({
    url: `https://api.github.com/search/repositories?q=${searchTerms}`
  }).done(renderSearchResults)
    .fail((error) => {
    displayError();
  })
}

function displayError () {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function renderSearchResults(data) {
  // console.log("renderSearchResults", data)
  const repos = data.items;
  repos.forEach(function(repo) {
    console.log(repo);
  });
}

function showCommits() {

}

$(document).ready(function (){
});

// function renderSearchResults(result) {
//   // const repos = data.items;
//   // console.log(repos);
//
//   return `
//       <div>
//         <h2><a href="${result.html_url}">${result.name}</a></h2>
//         <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
//         <p>${result.description}</p>
//       </div>
//       <hr>
//     `
//
// }

// function displaySearchResults(data) {
//   const repos = data.items;
//   // console.log(repos);
//   repos.map(repo => renderSearchResult(repo));
// }
//
// function renderSearchResult(data) {
//
// }


// function displaySearchResults(chunk) {
//   const repos = chunk.items;
//   const ownerLogin = repos.owner.login;
//   const ownerAvatar = repos.owner.avatar_url;
//   const ownerPage = repos.owner.url;
//
//   const repoList = '<ul>' + ${repos.map(repo =>
//                     '<li>' + repo.owner.login + '</li>' +
//                     '<li>' + repo.owner.avatar_url + '</li>' +
//                     '<li>' + repo.owner.url + '</li>').join('')}
//                    + '</ul>';
//   return repoList;
// }






// var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")
//
// var renderCommit = (commit) => {
//   return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`
// }
//
// var renderCommits = (data) => {
//   let result = data.map((commit)=>renderCommit(commit)).join('')
//   return `<ul>${result}</ul>`
// }
//
// var showCommits = (el) => {
//   $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
//     $('#details').html(renderCommits(data))
//   }).fail(error => {
//     displayError()
//   })
// }
//
