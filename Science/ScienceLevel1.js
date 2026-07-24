const questions = [
    {
        question: "Which part of a plant grows underground?",
        choices: ["Leaf", "Flower", "Root", "Stem"],
        answer: "Root"
    },
    {
        question: "What do plants need to make their own food?",
        choices: ["Sunlight", "Candy", "Rocks", "Sand"],
        answer: "Sunlight"
    },
    {
        question: "Which animal is a mammal?",
        choices: ["Frog", "Robin", "Dog", "Fish"],
        answer: "Dog"
    },
    {
        question: "How many legs does a spider have?",
        choices: ["6", "8", "10", "4"],
        answer: "8"
    },
    {
        question: "Which season comes after summer?",
        choices: ["Winter", "Spring", "Fall", "Summer"],
        answer: "Fall"
    },
    {
        question: "What do bees collect from flowers?",
        choices: ["Milk", "Nectar", "Leaves", "Mud"],
        answer: "Nectar"
    },
    {
        question: "Which sense do you use with your ears?",
        choices: ["Taste", "Hearing", "Smell", "Sight"],
        answer: "Hearing"
    },
    {
        question: "Which planet do we live on?",
        choices: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Earth"
    },
    {
        question: "What do fish use to breathe underwater?",
        choices: ["Lungs", "Nose", "Gills", "Mouth"],
        answer: "Gills"
    },
    {
        question: "What is the star at the center of our solar system?",
        choices: ["Moon", "Sun", "Earth", "Mars"],
        answer: "Sun"
    },
    {
        question: "Which animal changes from a caterpillar into a butterfly?",
        choices: ["Bee", "Spider", "Butterfly", "Ladybug"],
        answer: "Butterfly"
    },
    {
        question: "What do we call water that falls from clouds?",
        choices: ["Snow", "Rain", "Ice", "Steam"],
        answer: "Rain"
    },
    {
        question: "Which object is a solid?",
        choices: ["Milk", "Air", "Rock", "Juice"],
        answer: "Rock"
    },
    {
        question: "Which body part helps you smell?",
        choices: ["Eyes", "Hands", "Nose", "Feet"],
        answer: "Nose"
    },
    {
        question: "Which animal lives in the ocean?",
        choices: ["Camel", "Shark", "Horse", "Lion"],
        answer: "Shark"
    },
    {
        question: "What do birds have that help them fly?",
        choices: ["Fins", "Wings", "Hooves", "Gills"],
        answer: "Wings"
    },
    {
        question: "Which season is usually the coldest?",
        choices: ["Spring", "Winter", "Summer", "Fall"],
        answer: "Winter"
    },
    {
        question: "What do we breathe in to stay alive?",
        choices: ["Carbon Dioxide", "Water", "Oxygen", "Sand"],
        answer: "Oxygen"
    },
    {
        question: "Which animal lays eggs?",
        choices: ["Chicken", "Dog", "Cat", "Horse"],
        answer: "Chicken"
    },
    {
        question: "What covers most of Earth's surface?",
        choices: ["Grass", "Water", "Sand", "Mountains"],
        answer: "Water"
    },
    {
        question: "Which tool helps you see tiny things?",
        choices: ["Telescope", "Microscope", "Ruler", "Scale"],
        answer: "Microscope"
    },
    {
        question: "Which part of your body pumps blood?",
        choices: ["Brain", "Heart", "Lungs", "Stomach"],
        answer: "Heart"
    },
    {
        question: "Which animal sleeps through much of the winter?",
        choices: ["Bear", "Rabbit", "Cow", "Deer"],
        answer: "Bear"
    },
    {
        question: "What is frozen water called?",
        choices: ["Steam", "Rain", "Ice", "Cloud"],
        answer: "Ice"
    },
    {
        question: "Which animal has a long neck?",
        choices: ["Elephant", "Zebra", "Giraffe", "Pig"],
        answer: "Giraffe"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Earth", "Mars", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What do magnets attract?",
        choices: ["Wood", "Plastic", "Iron", "Paper"],
        answer: "Iron"
    },
    {
        question: "Which weather tool measures temperature?",
        choices: ["Compass", "Thermometer", "Ruler", "Clock"],
        answer: "Thermometer"
    },
    {
        question: "Which animal is an insect?",
        choices: ["Ant", "Mouse", "Snake", "Frog"],
        answer: "Ant"
    },
    {
        question: "What do humans need to drink every day?",
        choices: ["Oil", "Water", "Paint", "Gasoline"],
        answer: "Water"
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