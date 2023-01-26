import DogCharacter from "/Dog.js";
import dogs from "/data.js";

function getNewDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new DogCharacter(nextDogData) : {};
}

// render new dog
function renderNewDog() {
  if (dogs.length > 0) {
    setTimeout(() => {
      dog = getNewDog();
      render();
    }, 1000);
  } else {
    setTimeout(() => {
      renderEnd();
    }, 1000);
  }
}

// all caught up function
function renderEnd() {
  document.getElementById("main").innerHTML = `
        <div class="end-message">
            <p>You're all caught up</p>
        </div>
    `;
}

// like and dislike functions
document.getElementById("like-btn").addEventListener("click", like);
function like() {
  document.getElementById("tag").innerHTML = `
        <img id="like-badge" src="/images/badge-like.png" alt="LIKE">
    `;
  renderNewDog();
}

document.getElementById("nope-btn").addEventListener("click", dislike);
function dislike() {
  document.getElementById("tag").innerHTML = `
        <img id="nope-badge" src="/images/badge-nope.png" alt="NOPE">
    `;
  renderNewDog();
}

// render
function render() {
  document.getElementById("dog-info").innerHTML = dog.getDogHtml();
}

// instance and render
let dog = getNewDog();
render();
