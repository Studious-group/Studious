const questions = [
    {
        question: "What is 4 x 8?",
        choices: ["40", "36", "32", "44"],
        answer: "32"
    },
    {
        question: "What is 45 / 5?",
        choices: ["8", "9", "10", "11"],
        answer: "9"
    },
    {
        question: "What is 14 x 4?",
        choices: ["56", "52", "60", "53"],
        answer: "56"
    },
    {
        question: "What is 28 / 4?",
        choices: ["10", "8", "7", "5"],
        answer: "7"
    },
    {
        question: "What is 24 x 2?",
        choices: ["46", "52", "50", "48"],
        answer: "48"
    },
    {
        question: "What is 10 x 6?",
        choices: ["50", "60", "64", "58"],
        answer: "60"
    },
    {
        question: "What is 6 x 4?",
        choices: ["22", "24", "28", "20"],
        answer: "24"
    },
    {
        question: "What is 36 / 6?",
        choices: ["5", "7", "6", "8"],
        answer: "6"
    },
    {
        question: "What is 7 x 3?",
        choices: ["21", "18", "24", "20"],
        answer: "21"
    },
    {
        question: "What is 48 / 6?",
        choices: ["7", "8", "9", "6"],
        answer: "8"
    },
    {
        question: "What is 5 x 8?",
        choices: ["35", "45", "40", "42"],
        answer: "40"
    },
    {
        question: "What is 27 / 3?",
        choices: ["8", "9", "10", "7"],
        answer: "9"
    },
    {
        question: "What is 9 x 2?",
        choices: ["16", "18", "20", "19"],
        answer: "18"
    },
    {
        question: "What is 56 / 7?",
        choices: ["9", "8", "7", "6"],
        answer: "8"
    },
    {
        question: "What is 4 x 7?",
        choices: ["24", "30", "28", "26"],
        answer: "28"
    },
    {
        question: "What is 45 / 5?",
        choices: ["8", "9", "10", "7"],
        answer: "9"
    },
    {
        question: "What is 8 x 3?",
        choices: ["22", "24", "26", "21"],
        answer: "24"
    },
    {
        question: "What is 63 / 7?",
        choices: ["8", "9", "10", "11"],
        answer: "9"
    },
    {
        question: "What is 6 x 6?",
        choices: ["30", "36", "34", "40"],
        answer: "36"
    },
    {
        question: "What is 72 / 8?",
        choices: ["7", "8", "9", "10"],
        answer: "9"
    },
    {
        question: "What is 3 x 9?",
        choices: ["27", "24", "30", "28"],
        answer: "27"
    },
    {
        question: "What is 54 / 6?",
        choices: ["8", "10", "9", "7"],
        answer: "9"
    },
    {
        question: "What is 7 x 7?",
        choices: ["42", "49", "56", "45"],
        answer: "49"
    },
    {
        question: "What is 81 / 9?",
        choices: ["8", "9", "10", "7"],
        answer: "9"
    },
    {
        question: "What is 8 x 5?",
        choices: ["35", "40", "45", "38"],
        answer: "40"
    },
    {
        question: "What is 64 / 8?",
        choices: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "What is 9 x 4?",
        choices: ["34", "36", "38", "32"],
        answer: "36"
    },
    {
        question: "What is 42 / 6?",
        choices: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is 11 x 2?",
        choices: ["20", "22", "24", "18"],
        answer: "22"
    },
    {
        question: "What is 33 / 3?",
        choices: ["10", "11", "12", "9"],
        answer: "11"
    },
    {
        question: "What is 12 x 2?",
        choices: ["22", "24", "26", "20"],
        answer: "24"
    },
    {
        question: "What is 60 / 5?",
        choices: ["10", "12", "14", "11"],
        answer: "12"
    },
    {
        question: "What is 10 x 3?",
        choices: ["28", "32", "30", "35"],
        answer: "30"
    },
    {
        question: "What is 44 / 4?",
        choices: ["10", "11", "12", "9"],
        answer: "11"
    },
    {
        question: "What is 5 x 9?",
        choices: ["40", "45", "50", "43"],
        answer: "45"
    },
    {
        question: "What is 96 / 8?",
        choices: ["10", "12", "14", "11"],
        answer: "12"
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