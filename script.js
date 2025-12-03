const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// função para mover o botão "não"
function moveNoButton() {
  const containerWidth = questionContainer.offsetWidth - noBtn.offsetWidth;
  const containerHeight = questionContainer.offsetHeight - noBtn.offsetHeight;

  let newX = Math.random() * containerWidth;
  let newY = Math.random() * containerHeight;

  noBtn.style.position = "absolute";
  noBtn.style.transition = "0.15s"; // suave
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Foge no PC
noBtn.addEventListener("mouseover", moveNoButton);

// Foge no celular
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // impede o toque de clicar
  moveNoButton();
});

// botão "sim"
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
  }, 3000);
});
