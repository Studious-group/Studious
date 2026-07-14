const questions = [
    {
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
        answer: "George Washington"
    },
    {
        question: "How many U.S. states are there?",
        choices: ["52", "51", "49", "50"],
        answer: "50"
    },
    {
        question: "Which Country is below the United States?",
        choices: ["Canada", "Mexico", "Russia", "China"],
        answer: "Mexico"
    },
    {
        question: "What is the capital of the United States?",
        choices: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
        answer: "Washington, D.C."
    },
    {
        question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
        choices: ["Mayflower", "Santa Maria", "Endeavour", "Titanic"],
        answer: "Mayflower"
    },
    {
        question: "Which war was fought between the North and South in the United States?",
        choices: ["World War I", "The Civil War", "The Revolutionary War", "The Korean War"],
        answer: "The Civil War"
    },
    {
        question: "Who was the first person to walk on the Moon?",
        choices: ["Neil Armstrong", "Buzz Aldrin", "John Glenn", "Yuri Gagarin"],
        answer: "Neil Armstrong"
    },
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