const questions = [
    {
        question: "In which U.S. state did the Gold Rush of 1849 occur?",
        choices: ["California", "New York", "Texas", "Indiana"],
        answer: "California"
    },
    {
        question: "Which event marked the beginning of the Great Depression in the United States?",
        choices: ["The first moon landing", "The stock market crash of 1929", "The signing of the Treaty of Versailles", "The fall of the Berlin Wall"],
        answer: "The stock market crash of 1929"
    },
    {
        question: "Which empire was ruled by Julius Caesar?",
        choices: ["The Ottoman Empire", "The Roman Empire", "The Persian Empire", "The Byzantine Empire"],
        answer: "The Roman Empire"
    },
    {
        question: "What was the significance of the Magna Carta?",
        choices: ["It ended the Hundred Years' War", "It limited the power of the English king", "It founded the Roman Empire", "It created the United Nations"],
        answer: "It limited the power of the English king"
    },
    {
        question: "Who was the leader of the Soviet Union during most of the Cold War?",
        choices: ["Mikhail Gorbachev", "Joseph Stalin", "Nikita Khrushchev", "Vladimir Lenin"],
        answer: "Joseph Stalin"
    },
    {
        question: "Which river was important to the development of ancient Egypt?",
        choices: ["Nile", "Amazon", "Mississippi", "Danube"],
        answer: "Nile"
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