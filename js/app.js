const showBtn = document.querySelectorAll(".question-btn");
const answers = document.querySelectorAll(".answer");
const faqContainer = document.querySelector(".faq");

const toggleIconAndAnswer = (clickedBtn, clickedAnswer) => {
  const isMinus =
    clickedBtn.getAttribute("src") === "./assets/images/icon-minus.svg";

  showBtn.forEach((btn, index) => {
    btn.setAttribute("src", "./assets/images/icon-plus.svg");
    answers[index].classList.add("hidden");
  });

  if (!isMinus) {
    clickedBtn.setAttribute("src", "./assets/images/icon-minus.svg");
    clickedAnswer.classList.remove("hidden");
  }
};

const handleEvent = (btn, answer) => {
  toggleIconAndAnswer(btn, answer);
};

showBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => handleEvent(btn, answers[index]));
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleEvent(btn, answers[index]);
    }
  });

  btn.setAttribute("tabindex", "0");
});

document.addEventListener("click", (event) => {
  if (!faqContainer.contains(event.target)) {
    showBtn.forEach((btn, index) => {
      btn.setAttribute("src", "./assets/images/icon-plus.svg");
      answers[index].classList.add("hidden");
    });
  }
});
