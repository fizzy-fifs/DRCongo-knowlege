// const { Console } = require("console");

const quizQuestions = [
  {
    id: 1,
    question: 'Dr.Congo is situated where in Africa?',
    options: [
      'Middle Eastern',
      'Central Africa',
      'West Africa',
      'South Africa',
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'The Democratic Republic of Congo was formerly known as?',
    options: ['Kingdom of Congo', 'Kinshasa', 'Swahili', 'Republic of Zaire'],
    correctAnswer: 3,
  },
  {
    id: 3,
    question:
      'Who took power and changed the name of the country in the 1990s?',
    options: [
      'Laurent-Désiré Kabila',
      'Mobutu Sese Seko',
      'Joseph Kabila',
      'Joseph Kasa-Vubu',
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question:
      'In what year and month did Congo their gain independence from Belgium?',
    options: ['June, 1690s', 'July, 1960s', 'June, 1960s', 'June, 1930s'],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: 'What river runs through DR Congo?',
    options: ['Amazon River', 'Kinshasa River', 'Congo River', 'Wakanda River'],
    correctAnswer: 2,
  },
  {
    id: 6,
    question:
      'In the rankings of the largest African countries, DRC is ranked at what position?',
    options: ['2nd', '14th', '4th', '3rd'],
    correctAnswer: 0,
  },
];

let currentIndex = 0;
let score = 0;
let quizIsFinished = false;

function startQuiz() {
  if (quizIsFinished) {
    restartQuiz();
  } else {
    nextQuestion();
    document.getElementById('start-button').style.visibility = 'hidden'
    document.getElementById('score').style.visibility = 'visible';
    setScore(0)
  }
}

function restartQuiz() {
  currentIndex = 0;

  quizIsFinished = false;
  document.getElementById('quiz-main').style.display = 'block';
  document.getElementById('finish').style.display = 'none';
  startQuiz();
}

function nextQuestion() {
  const currentQuestion = quizQuestions[currentIndex];

  if (currentIndex === quizQuestions.length - 1) {
    finishQuiz();
  } else {
    document.getElementById('question-text').innerHTML =
      currentQuestion.question;
    document.getElementById('option1').innerHTML = currentQuestion.options[0];
    document.getElementById('option2').innerHTML = currentQuestion.options[1];
    document.getElementById('option3').innerHTML = currentQuestion.options[2];
    document.getElementById('option4').innerHTML = currentQuestion.options[3];

    currentIndex++;
    console.log(currentIndex)
  }
}

function clickOption(selectedOption) {
  const currentQuestion = quizQuestions[currentIndex - 1];
  console.log('SELECTED OPTION:' + selectedOption)
  console.log('Correct answer:' + currentQuestion.correctAnswer)
  if (currentQuestion.correctAnswer === selectedOption) {
    
    setScore(score + 1);
  }
  nextQuestion();
}

function finishQuiz() {
  quizIsFinished = true;
  document.getElementById('quiz-main').style.display = 'none';
  document.getElementById('finish').style.display = 'block';
  document.getElementById('start-button').innerHTML = 'Restart Quiz';
  document.getElementById('start-button').style.visibility = 'visible';
  setScore(score + '/' + quizQuestions.length);
}

function setScore(value){
  score = value;
  document.getElementById('score-value').innerHTML = score;
}