const showBtn = document.querySelectorAll(".question-btn");
const answers = document.querySelectorAll(".answer");

const toggleIconAndAnswer = (clickedBtn, clickedAnswer) => {
  // Sprawdzamy, czy kliknięty przycisk ma już ikonę "minus"
  const isMinus =
    clickedBtn.getAttribute("src") === "./assets/images/icon-minus.svg";

  // Zmieniamy wszystkie ikony na "plus" i ukrywamy wszystkie odpowiedzi
  showBtn.forEach((btn, index) => {
    btn.setAttribute("src", "./assets/images/icon-plus.svg");
    answers[index].classList.add("hidden");
  });

  // Jeśli kliknięty przycisk nie ma ikony "minus", zmieniamy go na "minus" i pokazujemy odpowiedź
  if (!isMinus) {
    clickedBtn.setAttribute("src", "./assets/images/icon-minus.svg");
    clickedAnswer.classList.remove("hidden");
  }
};

// Funkcja do obsługi kliknięcia i wciśnięcia "Enter"
const handleEvent = (btn, answer) => {
  toggleIconAndAnswer(btn, answer);
};

// Dodajemy zdarzenie do każdego przycisku
showBtn.forEach((btn, index) => {
  // Obsługa kliknięcia
  btn.addEventListener("click", () => handleEvent(btn, answers[index]));

  // Obsługa wciśnięcia klawisza "Enter"
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleEvent(btn, answers[index]);
    }
  });

  // Opcjonalnie można dodać atrybut tabindex, aby element mógł być dostępny dla klawiatury
  btn.setAttribute("tabindex", "0");
});
