const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is 5 - 3?",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
    question: "4 + 3 =",
    choices: [6, 7, 8, 9],
    answer: 7
  },
  {
    question: "9 - 5 =",
    choices: [5, 6, 4, 3],
    answer: 4
  },
  {
    question: "2 + 6 =",
    choices: [9, 8, 7, 6],
    answer: 8
  },
  {
    question: "7 - 2 =",
    choices: [4, 6, 7, 5],
    answer: 5
  },
  {
    question: "5 + 2 =",
    choices: [8, 6, 9, 7],
    answer: 7
  },
  {
    question: "8 - 3 =",
    choices: [6, 5, 4, 7],
    answer: 5
  },
  {
    question: "1 + 7 =",
    choices: [9, 8, 6, 7],
    answer: 8
  },
  {
    question: "6 - 4 =",
    choices: [3, 1, 2, 4],
    answer: 2
  },
  {
    question: "3 + 5 =",
    choices: [7, 9, 8, 6],
    answer: 8
  },
  {
    question: "9 - 1 =",
    choices: [8, 7, 9, 6],
    answer: 8
  },
  {
    question: "2 + 2 =",
    choices: [3, 5, 4, 6],
    answer: 4
  },
  {
    question: "7 - 6 =",
    choices: [1, 2, 3, 4],
    answer: 1
  },
  {
    question: "4 + 5 =",
    choices: [8, 9, 7, 6],
    answer: 9
  },
  {
    question: "8 - 7 =",
    choices: [2, 0, 1, 3],
    answer: 1
  },
  {
    question: "6 + 1 =",
    choices: [7, 8, 6, 9],
    answer: 7
  },
  {
    question: "5 - 3 =",
    choices: [1, 3, 2, 4],
    answer: 2
  },
  {
    question: "3 + 4 =",
    choices: [6, 7, 8, 5],
    answer: 7
  },
  {
    question: "9 - 8 =",
    choices: [2, 1, 3, 0],
    answer: 1
  },
  {
    question: "1 + 6 =",
    choices: [5, 6, 8, 7],
    answer: 7
  },
  {
    question: "8 - 5 =",
    choices: [2, 3, 4, 5],
    answer: 3
  },
  {
    question: "5 + 4 =",
    choices: [9, 8, 7, 6],
    answer: 9
  },
  {
    question: "6 - 2 =",
    choices: [5, 3, 4, 2],
    answer: 4
  },
  {
    question: "7 + 2 =",
    choices: [8, 9, 6, 7],
    answer: 9
  },
  {
    question: "4 - 1 =",
    choices: [2, 4, 3, 5],
    answer: 3
  },
  {
    question: "2 + 5 =",
    choices: [8, 7, 6, 5],
    answer: 7
  },
  {
    question: "9 - 4 =",
    choices: [6, 4, 5, 3],
    answer: 5
  },
  {
    question: "3 + 3 =",
    choices: [5, 7, 6, 4],
    answer: 6
  },
  {
    question: "8 - 6 =",
    choices: [2, 1, 4, 3],
    answer: 2
  },
  {
    question: "1 + 8 =",
    choices: [8, 7, 9, 6],
    answer: 9
  },
  {
    question: "7 - 5 =",
    choices: [1, 3, 4, 2],
    answer: 2
  },
  {
    question: "4 + 4 =",
    choices: [9, 8, 7, 6],
    answer: 8
  },
  {
    question: "6 - 1 =",
    choices: [5, 6, 4, 3],
    answer: 5
  },
  {
    question: "5 + 3 =",
    choices: [7, 8, 9, 6],
    answer: 8
  },
  {
    question: "9 - 2 =",
    choices: [6, 8, 5, 7],
    answer: 7
  },
  {
    question: "2 + 7 =",
    choices: [9, 8, 7, 6],
    answer: 9
  },
  {
    question: "8 - 1 =",
    choices: [6, 5, 7, 8],
    answer: 7
  },
  {
    question: "3 + 6 =",
    choices: [8, 7, 9, 6],
    answer: 9
  },
  {
    question: "7 - 4 =",
    choices: [2, 3, 4, 5],
    answer: 3
  },
  {
    question: "1 + 5 =",
    choices: [5, 7, 8, 6],
    answer: 6
  },
  {
    question: "6 - 5 =",
    choices: [2, 1, 3, 0],
    answer: 1
  }
];
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion;

function loadRandomQuestion() {
    resultElement.textContent = "";
    answersElement.innerHTML = "";

    currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    questionElement.textContent = currentQuestion.question;

    // Shuffle answer choices
    const shuffledChoices = [...currentQuestion.choices].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;

        button.onclick = () => checkAnswer(button, choice);

        answersElement.appendChild(button);
    });
}

function checkAnswer(button, selectedAnswer) {
    const buttons = answersElement.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === currentQuestion.answer) {
        button.classList.add("correct");
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        button.classList.add("wrong");

        buttons.forEach(btn => {
            if (btn.textContent === currentQuestion.answer) {
                btn.classList.add("correct");
            }
        });

        resultElement.textContent = "Incorrect!";
        resultElement.style.color = "red";
    }
}

nextBtn.addEventListener("click", loadRandomQuestion);

loadRandomQuestion();