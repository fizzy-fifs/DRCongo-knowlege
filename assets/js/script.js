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
  
  function startQuiz() {
    nextQuestion();
    document.getElementById('start-button').disabled = true;
  }
  
  function nextQuestion() {
    const currentQuestion = quizQuestions[currentIndex];
  
    document.getElementById('question-text').innerHTML = currentQuestion.question;
    document.getElementById('option1').innerHTML = currentQuestion.options[0];
    document.getElementById('option2').innerHTML = currentQuestion.options[1];
    document.getElementById('option3').innerHTML = currentQuestion.options[2];
    document.getElementById('option4').innerHTML = currentQuestion.options[3];
  
    currentIndex++;
  }
  
  function clickOption(selectedOption) {
    const currentQuestion = quizQuestions[currentIndex];
    if (currentQuestion.correctAnswer === selectedOption) {
      score++;
      document.getElementById('score-value').innerHTML = score;
    }
      nextQuestion();
  }