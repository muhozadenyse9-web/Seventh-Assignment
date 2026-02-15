// ==========================
// GLOBAL SCORE
// ==========================
let score = 0;

const scoreDisplay = document.querySelector("#scoreDisplay");
const likeButtons = document.querySelectorAll(".like-btn");
const searchInput = document.querySelector("#searchInput");
const posts = document.querySelectorAll(".blog-post");
const tags = document.querySelectorAll(".tag");
const backToTop = document.querySelector("#backToTop");
const navLinks = document.querySelectorAll(".nav-link");
const mainTitle = document.querySelector("#mainTitle");
// ==========================
// ENGAGEMENT SCORE
// ==========================
function updateScore() {
  score++;
  scoreDisplay.innerText = score;

  if (score >= 10) {
    scoreDisplay.classList.add("text-yellow-500");
  }
}

likeButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.innerText = "✓ Liked";
    button.classList.add("font-bold");
    updateScore();
  });
});
// ==========================
// REAL-TIME SEARCH
// ==========================
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    post.style.display = text.includes(query) ? "block" : "none";
  });
});
// ==========================
// TAG FILTERING
// ==========================
tags.forEach(tag => {
  tag.addEventListener("click", () => {
    const selectedTag = tag.dataset.tag.toLowerCase();

    posts.forEach(post => {
      const postTags = post.dataset.tags.toLowerCase();
      post.style.display = postTags.includes(selectedTag)
        ? "block"
        : "none";
    });

    mainTitle.innerText = "JANE BLOGLIFE - " + tag.dataset.tag;
  });
});
