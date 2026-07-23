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
     {
        question: "Which state is known as the Sunshine State?",
        choices: ["Texas", "Florida", "California", "Arizona"],
        answer: "Florida"
    },
    {
        question: "Which state is known as the Lone Star State?",
        choices: ["Oklahoma", "Texas", "New Mexico", "Nevada"],
        answer: "Texas"
    },
    {
        question: "What is the name of the river that flows through the Grand Canyon?",
        choices: ["Colorado River", "Mississippi River", "Ohio River", "Missouri River"],
        answer: "Colorado River"
    },
    {
        question: "Which country is directly east of the United States across the Atlantic Ocean?",
        choices: ["China", "France", "Japan", "Mexico"],
        answer: "France"
    },
    {
        question: "Which country is famous for maple syrup?",
        choices: ["Canada", "Brazil", "Spain", "Italy"],
        answer: "Canada"
    },
    {
        question: "Which monument has four U.S. presidents carved into a mountain?",
        choices: ["Mount Rushmore", "Statue of Liberty", "Lincoln Memorial", "Washington Monument"],
        answer: "Mount Rushmore"
    },
    {
        question: "What do the stars on the U.S. flag represent?",
        choices: ["The original colonies", "The states", "The presidents", "The capitals"],
        answer: "The states"
    },
    {
        question: "What do the stripes on the U.S. flag represent?",
        choices: ["The 13 original colonies", "The 50 states", "The presidents", "The national parks"],
        answer: "The 13 original colonies"
    },
    {
        question: "Who was the first person to walk on the Moon?",
        choices: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
        answer: "Neil Armstrong"
    },
    {
        question: "Which U.S. holiday honors people who have served in the military?",
        choices: ["Veterans Day", "Thanksgiving", "Labor Day", "Earth Day"],
        answer: "Veterans Day"
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        choices: ["Germany", "France", "England", "Belgium"],
        answer: "France"
    },
    {
        question: "Which country is famous for pizza?",
        choices: ["Italy", "Mexico", "China", "Greece"],
        answer: "Italy"
    },
    {
        question: "Which continent is Antarctica on?",
        choices: ["Europe", "South America", "Antarctica", "Asia"],
        answer: "Antarctica"
    },
    {
        question: "What is the tallest mountain in the United States?",
        choices: ["Denali", "Mount Rainier", "Pikes Peak", "Mount Whitney"],
        answer: "Denali"
    },
    {
        question: "Which state is an island in the Pacific Ocean?",
        choices: ["Florida", "Alaska", "Hawaii", "California"],
        answer: "Hawaii"
    },
    {
        question: "Which U.S. holiday is celebrated on the fourth Thursday of November?",
        choices: ["Memorial Day", "Thanksgiving", "Independence Day", "Presidents' Day"],
        answer: "Thanksgiving"
    },
    {
        question: "What is the name of the famous bell in Philadelphia?",
        choices: ["Liberty Bell", "Freedom Bell", "Victory Bell", "Independence Bell"],
        answer: "Liberty Bell"
    },
    {
        question: "Which state has the Grand Canyon?",
        choices: ["Utah", "Nevada", "Arizona", "Colorado"],
        answer: "Arizona"
    },
    {
        question: "Which U.S. holiday honors Martin Luther King Jr.?",
        choices: ["Presidents' Day", "Veterans Day", "Martin Luther King Jr. Day", "Labor Day"],
        answer: "Martin Luther King Jr. Day"
    },
    {
        question: "Which country is famous for the kangaroo?",
        choices: ["New Zealand", "Australia", "South Africa", "India"],
        answer: "Australia"
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