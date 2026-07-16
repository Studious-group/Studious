const questions = [
    {
        question: "Which animal is a reptile?",
        choices: ["Turtle", "Dog", "Robin", "Rabbit"],
        answer: "Turtle"
    },
    {
        question: "Which part of the plant makes seeds?",
        choices: ["Root", "Stem", "Flower", "Leaf"],
        answer: "Flower"
    },
    {
        question: "What do we call an animal that eats only plants?",
        choices: ["Herbivore", "Carnivore", "Omnivore", "Insect"],
        answer: "Herbivore"
    },
    {
        question: "Which object gives off its own light?",
        choices: ["Moon", "Flashlight", "Mirror", "Book"],
        answer: "Flashlight"
    },
    {
        question: "What helps a bird steer while it flies?",
        choices: ["Tail", "Beak", "Claws", "Eyes"],
        answer: "Tail"
    },
    {
        question: "Which animal lives in a hive?",
        choices: ["Bee", "Ant", "Spider", "Butterfly"],
        answer: "Bee"
    },
    {
        question: "Which season do many flowers begin to bloom?",
        choices: ["Winter", "Fall", "Spring", "Summer"],
        answer: "Spring"
    },
    {
        question: "Which part of your body helps you bend your arm?",
        choices: ["Elbow", "Nose", "Toe", "Ear"],
        answer: "Elbow"
    },
    {
        question: "Which object is made mostly of metal?",
        choices: ["Spoon", "Pillow", "Paper", "Sock"],
        answer: "Spoon"
    },
    {
        question: "What do frogs become after they are tadpoles?",
        choices: ["Fish", "Frogs", "Snakes", "Birds"],
        answer: "Frogs"
    },
    {
        question: "Which animal is awake mostly at night?",
        choices: ["Owl", "Chicken", "Cow", "Duck"],
        answer: "Owl"
    },
    {
        question: "Which body part protects your brain?",
        choices: ["Skull", "Foot", "Hand", "Shoulder"],
        answer: "Skull"
    },
    {
        question: "Which animal has stripes?",
        choices: ["Giraffe", "Elephant", "Zebra", "Hippo"],
        answer: "Zebra"
    },
    {
        question: "Which weather happens when water freezes and falls from clouds?",
        choices: ["Rain", "Fog", "Snow", "Wind"],
        answer: "Snow"
    },
    {
        question: "What do worms help make healthy?",
        choices: ["Air", "Soil", "Clouds", "Rocks"],
        answer: "Soil"
    },
    {
        question: "Which object can float on water?",
        choices: ["Rock", "Wood", "Brick", "Coin"],
        answer: "Wood"
    },
    {
        question: "Which animal has a shell?",
        choices: ["Snail", "Horse", "Cat", "Monkey"],
        answer: "Snail"
    },
    {
        question: "What do people wear to protect their eyes from the bright sun?",
        choices: ["Gloves", "Sunglasses", "Boots", "Scarf"],
        answer: "Sunglasses"
    },
    {
        question: "Which animal can change its color to hide?",
        choices: ["Chameleon", "Cow", "Rabbit", "Sheep"],
        answer: "Chameleon"
    },
    {
        question: "Which body part helps you chew food?",
        choices: ["Teeth", "Knees", "Fingers", "Hair"],
        answer: "Teeth"
    },
    {
        question: "Which of these is a source of heat?",
        choices: ["Sun", "Moon", "Tree", "Rock"],
        answer: "Sun"
    },
    {
        question: "What do squirrels gather for food?",
        choices: ["Nuts", "Fish", "Grass", "Flowers"],
        answer: "Nuts"
    },
    {
        question: "Which animal has feathers?",
        choices: ["Bat", "Parrot", "Bear", "Lizard"],
        answer: "Parrot"
    },
    {
        question: "What happens to water when it gets very cold?",
        choices: ["It freezes", "It burns", "It disappears", "It glows"],
        answer: "It freezes"
    },
    {
        question: "Which part of a tree has bark?",
        choices: ["Trunk", "Leaf", "Root", "Flower"],
        answer: "Trunk"
    },
    {
        question: "Which animal uses echolocation to find food?",
        choices: ["Bat", "Horse", "Duck", "Goat"],
        answer: "Bat"
    },
    {
        question: "Which tool is used to look at the stars?",
        choices: ["Magnifying Glass", "Telescope", "Thermometer", "Compass"],
        answer: "Telescope"
    },
    {
        question: "What is the largest land animal?",
        choices: ["Rhino", "Elephant", "Hippo", "Giraffe"],
        answer: "Elephant"
    },
    {
        question: "Which material is clear enough to see through?",
        choices: ["Glass", "Wood", "Cardboard", "Metal"],
        answer: "Glass"
    },
    {
        question: "Which animal has a pouch for its baby?",
        choices: ["Kangaroo", "Tiger", "Horse", "Wolf"],
        answer: "Kangaroo"
    },
    {
        question: "Which sense helps you know if soup is hot?",
        choices: ["Touch", "Hearing", "Sight", "Smell"],
        answer: "Touch"
    },
    {
        question: "Which animal lives in a pond?",
        choices: ["Duck", "Camel", "Penguin", "Lion"],
        answer: "Duck"
    },
    {
        question: "What do plants grow from?",
        choices: ["Seeds", "Stones", "Clouds", "Feathers"],
        answer: "Seeds"
    },
    {
        question: "Which animal makes silk?",
        choices: ["Spider", "Bee", "Ant", "Grasshopper"],
        answer: "Spider"
    },
    {
        question: "Which object is attracted to a magnet?",
        choices: ["Paper Clip", "Rubber Ball", "Plastic Spoon", "Leaf"],
        answer: "Paper Clip"
    },
    {
        question: "Which animal is the tallest in the world?",
        choices: ["Elephant", "Giraffe", "Horse", "Camel"],
        answer: "Giraffe"
    },
    {
        question: "Which body part helps you keep your balance?",
        choices: ["Feet", "Hair", "Eyebrows", "Thumb"],
        answer: "Feet"
    },
    {
        question: "Which planet has beautiful rings around it?",
        choices: ["Saturn", "Mars", "Earth", "Mercury"],
        answer: "Saturn"
    },
    {
        question: "Which animal builds dams in rivers?",
        choices: ["Beaver", "Otter", "Fox", "Moose"],
        answer: "Beaver"
    },
    {
        question: "Which object is used to measure how heavy something is?",
        choices: ["Scale", "Thermometer", "Clock", "Ruler"],
        answer: "Scale"
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