const questions = [
    {
        question: "Which layer of Earth is made of solid rock and is where we live?",
        choices: ["Outer Core", "Crust", "Mantle", "Inner Core"],
        answer: "Crust"
    },
    {
        question: "Which simple machine is used to raise a flag on a flagpole?",
        choices: ["Lever", "Pulley", "Wheel and Axle", "Wedge"],
        answer: "Pulley"
    },
    {
        question: "Which gas do humans breathe out?",
        choices: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the process called when water changes into water vapor?",
        choices: ["Freezing", "Condensation", "Evaporation", "Melting"],
        answer: "Evaporation"
    },
    {
        question: "Which planet is the largest in our solar system?",
        choices: ["Earth", "Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is an animal that eats both plants and animals called?",
        choices: ["Carnivore", "Omnivore", "Herbivore", "Scavenger"],
        answer: "Omnivore"
    },
    {
        question: "Which type of rock forms when melted rock cools?",
        choices: ["Sedimentary", "Metamorphic", "Igneous", "Fossil"],
        answer: "Igneous"
    },
    {
        question: "Which force pulls objects toward Earth?",
        choices: ["Magnetism", "Electricity", "Gravity", "Friction"],
        answer: "Gravity"
    },
    {
        question: "Which organ helps clean your blood?",
        choices: ["Heart", "Kidneys", "Lungs", "Brain"],
        answer: "Kidneys"
    },
    {
        question: "Which phase of the Moon looks completely lit?",
        choices: ["New Moon", "Full Moon", "Half Moon", "Crescent Moon"],
        answer: "Full Moon"
    },
    {
        question: "Which animal is an amphibian?",
        choices: ["Snake", "Frog", "Turtle", "Lizard"],
        answer: "Frog"
    },
    {
        question: "What do we call the path a planet follows around the Sun?",
        choices: ["Axis", "Orbit", "Rotation", "Galaxy"],
        answer: "Orbit"
    },
    {
        question: "Which material is the best conductor of electricity?",
        choices: ["Wood", "Plastic", "Metal", "Rubber"],
        answer: "Metal"
    },
    {
        question: "Which part of the eye lets light enter?",
        choices: ["Pupil", "Eyelash", "Eyebrow", "Eyelid"],
        answer: "Pupil"
    },
    {
        question: "What do we call animals that sleep during the day and are active at night?",
        choices: ["Nocturnal", "Diurnal", "Migratory", "Domestic"],
        answer: "Nocturnal"
    },
    {
        question: "Which planet is closest in size to Earth?",
        choices: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "Which body system helps you move?",
        choices: ["Digestive System", "Muscular System", "Respiratory System", "Circulatory System"],
        answer: "Muscular System"
    },
    {
        question: "What causes day and night?",
        choices: ["The Moon orbits Earth", "Earth rotates", "The Sun moves around Earth", "Clouds cover the Sun"],
        answer: "Earth rotates"
    },
    {
        question: "Which type of cloud often brings rain?",
        choices: ["Cirrus", "Cumulus", "Nimbus", "Stratus"],
        answer: "Nimbus"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Iron", "Diamond", "Granite", "Quartz"],
        answer: "Diamond"
    },
    {
        question: "Which vitamin is mainly produced when your skin is exposed to sunlight?",
        choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        answer: "Vitamin D"
    },
    {
        question: "Which animal migrates thousands of miles each year?",
        choices: ["Monarch Butterfly", "Earthworm", "Penguin", "Sloth"],
        answer: "Monarch Butterfly"
    },
    {
        question: "Which planet is famous for its Great Red Spot?",
        choices: ["Mars", "Saturn", "Jupiter", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "What is a scientist who studies weather called?",
        choices: ["Biologist", "Meteorologist", "Geologist", "Astronomer"],
        answer: "Meteorologist"
    },
    {
        question: "Which type of energy comes from moving water?",
        choices: ["Solar Energy", "Wind Energy", "Hydroelectric Energy", "Nuclear Energy"],
        answer: "Hydroelectric Energy"
    },
    {
        question: "Which organ is mainly responsible for pumping blood through the body?",
        choices: ["Brain", "Heart", "Liver", "Stomach"],
        answer: "Heart"
    },
    {
        question: "What is the center of an atom called?",
        choices: ["Electron", "Nucleus", "Proton", "Shell"],
        answer: "Nucleus"
    },
    {
        question: "Which of these is a renewable resource?",
        choices: ["Coal", "Oil", "Wind", "Natural Gas"],
        answer: "Wind"
    },
    {
        question: "Which simple machine is a slanted surface used to lift objects?",
        choices: ["Lever", "Inclined Plane", "Screw", "Pulley"],
        answer: "Inclined Plane"
    },
    {
        question: "Which blood vessels carry blood away from the heart?",
        choices: ["Veins", "Arteries", "Capillaries", "Nerves"],
        answer: "Arteries"
    },
    {
        question: "What is the largest organ in the human body?",
        choices: ["Heart", "Brain", "Skin", "Lungs"],
        answer: "Skin"
    },
    {
        question: "Which planet takes the longest time to orbit the Sun?",
        choices: ["Neptune", "Saturn", "Jupiter", "Uranus"],
        answer: "Neptune"
    },
    {
        question: "Which process turns a liquid into a solid?",
        choices: ["Melting", "Evaporation", "Freezing", "Boiling"],
        answer: "Freezing"
    },
    {
        question: "Which animal is a vertebrate?",
        choices: ["Jellyfish", "Earthworm", "Starfish", "Eagle"],
        answer: "Eagle"
    },
    {
        question: "Which planet is known for having many large rings?",
        choices: ["Mars", "Saturn", "Mercury", "Venus"],
        answer: "Saturn"
    },
    {
        question: "What is the main source of energy for almost all life on Earth?",
        choices: ["The Moon", "The Sun", "Wind", "Volcanoes"],
        answer: "The Sun"
    },
    {
        question: "Which type of energy is stored in food?",
        choices: ["Light Energy", "Chemical Energy", "Sound Energy", "Heat Energy"],
        answer: "Chemical Energy"
    },
    {
        question: "Which instrument is used to measure rainfall?",
        choices: ["Barometer", "Rain Gauge", "Thermometer", "Anemometer"],
        answer: "Rain Gauge"
    },
    {
        question: "What is the name of the galaxy that contains our solar system?",
        choices: ["Andromeda Galaxy", "Whirlpool Galaxy", "Milky Way Galaxy", "Sombrero Galaxy"],
        answer: "Milky Way Galaxy"
    },
    {
        question: "Which planet has the shortest year because it orbits the Sun the fastest?",
        choices: ["Mercury", "Earth", "Mars", "Venus"],
        answer: "Mercury"
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