const olNewsStream = document.querySelector("ol.newsStream");
const newArticles = document.querySelectorAll(".newArticle");
const articleTitle = document.querySelectorAll("ol .newArticle a.articleTitle");
// Must be this short! If not, layout is ruined ):
const titleText = "Très intéressant article."

// articleTitle.textContent = "Hoo! -^-";

const anchorTags = document.querySelectorAll("a");
for (let i = 0; i < anchorTags.length; i++) {
  anchorTags[i].addEventListener("click", function(e) {
    e.preventDefault();
  })
}

let visited;
if (JSON.parse(localStorage.getItem("visited"))) {
  visited = JSON.parse(localStorage.getItem("visited"));
}
else {
  visited = [];
  for (let i = 0; i < 30; i++) {
    visited.push(false);
  }
  localStorage.setItem("visited", JSON.stringify(visited));
}

for (let i = 0; i < articleTitle.length; i++) {
  articleTitle[i].textContent = titleText;
  if (visited[i]) {
    articleTitle[i].style.color = "#A8A8A8";
  }
}

for (let i = 0; i < articleTitle.length; i++) {
  articleTitle[i].addEventListener("click", function() {
    this.style.color = "#A8A8A8";
    visited[i] = true;
    localStorage.setItem("visited", JSON.stringify(visited));
  });
}
