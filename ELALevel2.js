const questions = [
    {
        question: "What is the prefix of the word 'unhappy'?",
        choices: ["un", "happy", "unhappy", "none"],
        answer: "un"
    },
    {
        question: "what is the plural form of 'child'?",
        choices: ["childs", "children", "childes", "childern"],
        answer: "children"
    },
    {
        question: "What is read in past tense?",
        choices: ["readed", "readen", "read", "none"],
        answer: "read"
    },
    {
        question: "What is an antonym for 'less'?",
        choices: ["lesser", "more", "little", "fewer"],
        answer: "more"
    },
    {
        question: "how many letters are in 2,354?",
        choices: ["34", "33", "32", "30"],
        answer: "32"
    },
    {
        question: "what is the suffix of the word 'ungreatful'?",
        choices: ["ful", "great", "less", "un"],
        answer: "ful"
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