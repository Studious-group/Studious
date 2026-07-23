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
    },
    {
        question: "What word is a synonym for 'big'?",
        choices: ["tiny", "large", "small", "short"],
        answer: "large"
    },
    {
        question: "What word is a synonym for 'fast'?",
        choices: ["slow", "lazy", "late", "quick"],
        answer: "quick"
    },
    {
        question: "What word is a synonym for 'smart'?",
        choices: ["foolish", "clever", "weak", "slow"],
        answer: "clever"
    },
    {
        question: "What is an antonym for 'early'?",
        choices: ["soon", "first", "late", "quick"],
        answer: "late"
    },
    {
        question: "What is an antonym for 'strong'?",
        choices: ["powerful", "firm", "brave", "weak"],
        answer: "weak"
    },
    {
        question: "What is an antonym for 'clean'?",
        choices: ["fresh", "dirty", "neat", "washed"],
        answer: "dirty"
    },
    {
        question: "What does exhausted mean?",
        choices: ["excited", "hungry", "very tired", "angry"],
        answer: "very tired"
    },
    {
        question: "What does ancient mean?",
        choices: ["very new", "very old", "tiny", "expensive"],
        answer: "very old"
    },
    {
        question: "What does brave mean?",
        choices: ["scared", "careless", "fearless", "lazy"],
        answer: "fearless"
    },
    {
        question: "What does tiny mean?",
        choices: ["very fast", "very large", "very small", "very loud"],
        answer: "very small"
    },
    {
        question: "How many vowels are in the word 'computer'?",
        choices: ["5", "3", "4", "2"],
        answer: "3"
    },
    {
        question: "How many vowels are in the word 'beautiful'?",
        choices: ["6", "4", "5", "7"],
        answer: "5"
    },
    {
        question: "How many vowels are in the word 'elephant'?",
        choices: ["5", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "How many consonants are in the word 'keyboard'?",
        choices: ["5", "6", "4", "3"],
        answer: "5"
    },
    {
        question: "How many consonants are in the word 'friend'?",
        choices: ["2", "4", "5", "3"],
        answer: "4"
    },
    {
        question: "How many consonants are in the word 'umbrella'?",
        choices: ["6", "4", "3", "5"],
        answer: "4"
    },
    {
        question: "How many syllables are in the word 'banana'?",
        choices: ["4", "2", "5", "3"],
        answer: "3"
    },
    {
        question: "How many syllables are in the word 'computer'?",
        choices: ["3", "5", "4", "2"],
        answer: "3"
    },
    {
        question: "How many syllables are in the word 'elephant'?",
        choices: ["5", "3", "2", "4"],
        answer: "3"
    },
    {
        question: "How many syllables are in the word 'chocolate'?",
        choices: ["4", "5", "3", "2"],
        answer: "3"
    },

    {
        question: "Which word is spelled correctly?",
        choices: ["becuase", "becouse", "because", "beacause"],
        answer: "because"
    },
    {
        question: "Which word rhymes with 'cake'?",
        choices: ["dog", "lake", "book", "cat"],
        answer: "lake"
    },
    {
        question: "Which word rhymes with 'star'?",
        choices: ["bird", "tree", "car", "stone"],
        answer: "car"
    },
    {
        question: "What punctuation mark ends a question?",
        choices: [",", "?", ".", "!"],
        answer: "?"
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