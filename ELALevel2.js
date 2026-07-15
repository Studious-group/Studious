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
    },
    {
        question: "What is the prefix of the word 'redo'?",
        choices: ["re", "do", "redo", "ed"],
        answer: "re"
    },
    {
        question: "What is the suffix of the word 'careless'?",
        choices: ["care", "less", "ful", "ness"],
        answer: "less"
    },
    {
        question: "What is the plural form of 'mouse'?",
        choices: ["mouses", "mouse", "mice", "meese"],
        answer: "mice"
    },
    {
        question: "What is the plural form of 'tooth'?",
        choices: ["teeth", "tooths", "toothes", "tooth"],
        answer: "teeth"
    },
    {
        question: "What is the past tense of 'go'?",
        choices: ["gone", "goed", "went", "goes"],
        answer: "went"
    },
    {
        question: "What is the past tense of 'eat'?",
        choices: ["eaten", "ate", "eated", "eat"],
        answer: "ate"
    },
    {
        question: "What is an antonym for 'begin'?",
        choices: ["continue", "end", "start", "open"],
        answer: "end"
    },
    {
        question: "What is an antonym for 'full'?",
        choices: ["filled", "packed", "empty", "complete"],
        answer: "empty"
    },
    {
        question: "How many letters are in the word 'elephant'?",
        choices: ["9", "8", "7", "10"],
        answer: "8"
    },
    {
        question: "How many letters are in the word 'beautiful'?",
        choices: ["8", "10", "9", "11"],
        answer: "9"
    },
    
    {
        question: "Which word is spelled correctly?",
        choices: ["tomorow", "tomorrow", "tommorow", "tommoroww"],
        answer: "tomorrow"
    },
    {
        question: "Which word rhymes with 'light'?",
        choices: ["night", "chair", "stone", "book"],
        answer: "night"
    },
    {
        question: "How many syllables are in the word 'butterfly'?",
        choices: ["4", "2", "5", "3"],
        answer: "3"
    },
    {
        question: "How many syllables are in the word 'tiger'?",
        choices: ["3", "1", "2", "4"],
        answer: "2"
    },
    {
        question: "What punctuation mark shows excitement?",
        choices: [".", "?", "!", ","],
        answer: "!"
    },
    {
        question: "Which sentence is a question?",
        choices: ["I like pizza.", "Where are you?", "Please sit down.", "Wow!"],
        answer: "Where are you?"
    },
    {
        question: "What is the contraction for 'do not'?",
        choices: ["doesn't", "don't", "didn't", "won't"],
        answer: "don't"
    },
    {
        question: "What is the contraction for 'I am'?",
        choices: ["I'm", "I'd", "I'll", "Ive"],
        answer: "I'm"
    },
    {
        question: "Which word should be capitalized?",
        choices: ["banana", "friday", "desk", "teacher"],
        answer: "friday"
    },
    {
        question: "What is the opposite of 'always'?",
        choices: ["sometimes", "often", "never", "usually"],
        answer: "never"
    },
    {
        question: "What is a synonym for 'begin'?",
        choices: ["finish", "start", "stop", "close"],
        answer: "start"
    },
    {
        question: "What is the root word in 'preview'?",
        choices: ["pre", "view", "preview", "ew"],
        answer: "view"
    },
    {
        question: "What is the suffix in 'kindness'?",
        choices: ["kind", "ly", "ness", "nesses"],
        answer: "ness"
    },
    {
        question: "How many vowels are in the word 'airplane'?",
        choices: ["3", "5", "4", "2"],
        answer: "4"
    },
    {
        question: "How many consonants are in the word 'sunshine'?",
        choices: ["4", "5", "6", "3"],
        answer: "5"
    },
    {
        question: "Which word is a pronoun?",
        choices: ["they", "table", "running", "green"],
        answer: "they"
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