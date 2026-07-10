const questions = [
    {
        question: "What word is a synonym for 'happy'?",
        choices: ["mad", "sad", "joyful", "angry"],
        answer: "joyful"
    },
    {
        question: "What does shocked mean?",
        choices: ["surprised", "angry", "happy", "sad"],
        answer: "surprised"
    },
    {
        question: "How many vowels are in the word 'education'?",
        choices: ["7", "6", "8", "5"],
        answer: "5"
    },
    {
        question: "How many consonants are in the word 'technology'?",
        choices: ["11", "7", "8", "3"],
        answer: "7"
    },
    {
        question: "How many syllables are in the word 'balloon'?",
        choices: ["3", "2", "1", "0"],
        answer: "2"
    },
    {
        question: "What is an antonym for 'hot'?",
        choices: ["scorching", "warm", "boiling", "cold"],
        answer: "cold"
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