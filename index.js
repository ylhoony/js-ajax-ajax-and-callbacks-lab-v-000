function searchRepositories() {
  const searchTerms = $("#searchTerms").val();

  $.ajax({
    url: `https://api.github.com/search/repositories?q=${searchTerms}`
  })
  .done(renderSearchResults)
  .fail(displayError)
}

function displayError () {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function renderSearchResults(data) {
  const repos = data.items;
  repos.forEach(function(repo) {
    $("#results").append(
      `<div>
        <h2><a href="${repo.html_url}">${repo.name}</a></h2>
        <p><a href="#" data-repository="${repo.name}" data-owner="${repo.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${repo.description}</p>
      </div>
      <hr>`
    )
  });
}

function showCommits(e) {
  fetch(`https://api.github.com/repos/${e.dataset.owner}/${e.dataset.repository}/commits`)
    .then(parseJSON)
    .then(renderCommits)
}

function renderCommits(data) {
  data.forEach(function(commit) {
    $("#details").append(
      `<div>
        <p>${commit}</p>

      </div>`
    )
  })
}

function parseJSON(response) {
  return response.json();
}

$(document).ready(function (){
});


//
// var renderCommits = (data) => {
//   let result = data.map((commit)=>renderCommit(commit)).join('')
//   return `<ul>${result}</ul>`
// }
//
