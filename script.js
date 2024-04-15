// Dummy quiz questions
const additionQuestions = [
    { question: "189 + 54 =", answer: "243" },
    { question: "154 + 36 + 46=", answer: "236" },
    { question: "15 + 40 +48 =", answer: "103" },
    { question: "33 + 77 =", answer: "110" },
    { question: "68 + 44 =", answer: "112" }
];

const multiplicationQuestions = [
    { question: "42 x 12 =", answer: "504" },
    { question: "43 x 14 =", answer: "602" },
    { question: "5 x 60 =", answer: "300" },
    { question: "84 x 7 =", answer: "588" },
    { question: "91 x 3 =", answer: "273" }
];

// Variables to store the user's score
let additionScore = 0;
let multiplicationScore = 0;

// Variable to keep track of the current question index
let currentAdditionQuestionIndex = 0;
let currentMultiplicationQuestionIndex = 0;

// Display question for addition quiz
function displayAdditionQuestion() {
    const question = additionQuestions[currentAdditionQuestionIndex];
    const additionQuiz = document.getElementById("addition-quiz");
    additionQuiz.innerHTML = question.question;
    additionQuiz.dataset.answer = question.answer;
}

// Display question for multiplication quiz
function displayMultiplicationQuestion() {
    const question = multiplicationQuestions[currentMultiplicationQuestionIndex];
    const multiplicationQuiz = document.getElementById("multiplication-quiz");
    multiplicationQuiz.innerHTML = question.question;
    multiplicationQuiz.dataset.answer = question.answer;
}

// Check the answer for addition quiz
function checkAddition() {
    const userInput = document.getElementById("addition-answer").value;
    const additionQuiz = document.getElementById("addition-quiz");

    if (userInput === additionQuiz.dataset.answer) {
        additionScore++;
    }

    clearInput("addition-answer");
    currentAdditionQuestionIndex++;

    if (currentAdditionQuestionIndex < additionQuestions.length) {
        displayAdditionQuestion();
    } else {
        displayScore("addition");
        additionScore = 0;
        currentAdditionQuestionIndex = 0;
    }
}

// Check the answer for multiplication quiz
function checkMultiplication() {
    const userInput = document.getElementById("multiplication-answer").value;
    const multiplicationQuiz = document.getElementById("multiplication-quiz");

    if (userInput === multiplicationQuiz.dataset.answer) {
        multiplicationScore++;
    }

    clearInput("multiplication-answer");
    currentMultiplicationQuestionIndex++;

    if (currentMultiplicationQuestionIndex < multiplicationQuestions.length) {
        displayMultiplicationQuestion();
    } else {
        displayScore("multiplication");
        multiplicationScore = 0;
        currentMultiplicationQuestionIndex = 0;
    }
}

// Display the final score
function displayScore(quizType) {
    const totalScore = quizType === "addition" ? additionScore : multiplicationScore;
    alert(`Your ${quizType} score is: ${totalScore}`);
    document.location.href="index.html"
}

// Clear input field
function clearInput(inputId) {
    document.getElementById(inputId).value = "";
}

// Initialize the quizzes
displayAdditionQuestion();
displayMultiplicationQuestion();
