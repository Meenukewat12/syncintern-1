const questions = [
  {
    questions: ".Change in genetic composition of a population is called as?",

    answers: [
      { text: "Extinction", correct: false },
      { text: "Evolution", correct: true },
      { text: "Endemic", correct: false },
      { text: "Vicariance", correct: false },
    ],
  },
  {
    questions: ".Digestion is not a function of which of the following ?",

    answers: [
      { text: "Biotin", correct: true },
      { text: "Pepsin", correct: false },
      { text: "Renin", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    questions: " .Non-vascular embryophytes are __: ",

    answers: [
      { text: "petridophytes", correct: false },
      { text: "Algae", correct: false },
      { text: "Bryophytes", correct: true },
      { text: "Gymnosperm", correct: false },
    ],
  },

  {
    questions:
      ".For which of the following diseases first successful vaccination was devloped (it is caused by Variola virus)?",

    answers: [
      { text: "Cowpox", correct: false },
      { text: "Chickenpox", correct: false },
      { text: "Polio", correct: false },
      { text: "Smallpox", correct: true },
    ],
  },

  {
    questions:
      ".The Bovine spongiform encephalopathy (BSE) is commonly known as _______?",

    answers: [
      { text: "Foot and Mouth Disease", correct: false },
      { text: "Mad Cow Disease", correct: true },
      { text: "Frog Fever", correct: false },
      { text: "Creutzfeldt-Jakob disease", correct: false },
    ],
  },

  {
    questions:
      ".What is the name given to the linear strain produced in the direction of deforming force?",

    answers: [
      { text: "Linear Strain", correct: false },
      { text: "Longitudinal Strain", correct: true },
      { text: "Zero Strain", correct: false },
      { text: "Directional Strain", correct: false },
    ],
  },

  {
    questions:
      ".Which of the following is the phenomenon responsible for the trade winds?",

    answers: [
      { text: "Convection", correct: true },
      { text: "Conduction", correct: false },
      { text: "Radiation", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuetions();
}

function showQuetions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionsNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionsNo + " . " + currentQuestion.questions;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuetions();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
