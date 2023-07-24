const questions = [
    {
      question: "Which application allows for changes to the styling on a webpage?",
      answers: ["HTML", "CSS", "JavaScript", "SQL"],
      correctAnswer: "CSS"
    },
    {
      question: "What are people who write code called?",
      answers: ["Professors", "Engineers", "Programmers", "Artists"],
      correctAnswer: "Programmers"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Colorful Style Sheets", "Corrupted Style Sheets", "Commanding Style Sheets", "Cascading Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
      },
      {
        question: "What do we call the JS action that performs a task or can calculate values?",
        answers: ["Function", "Fraction", "Entity ", "Program"],
        correctAnswer: "Function"
      },
      {
        question: "What do we call an organized collection of structured information, or data, stored electronically in a computer system?",
        answers: ["SQL", "Function", "Database", "Graph"],
        correctAnswer: "Database"
      },
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const startBtn = document.getElementById("start-btn");
  const timerDisplay = document.getElementById("time");
  
  let currentQuestion = 0;
  let timer;
  let timeLeft = 60;
  
  function showQuestion() {
    if (currentQuestion >= questions.length) {
  
      clearInterval(timer);
      quizContainer.innerHTML = `<h2>Quiz Finished!</h2>`;
      return;
    }
  
    const questionData = questions[currentQuestion];
    let optionsHtml = "";
    questionData.answers.forEach((answer) => {
      optionsHtml += `<input type="radio" name="answer" value="${answer}">${answer}<br>`;
    });
  
    quizContainer.innerHTML = `
      <h2>${questionData.question}</h2>
      <form id="quiz-form">${optionsHtml}</form>
      <button onclick="checkAnswer()">Next</button>
    `;
  }
  
 
  function checkAnswer() {
    const form = document.getElementById("quiz-form");
    const selectedAnswer = form.elements["answer"].value;
  
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    
    }
  
    currentQuestion++;
    showQuestion();
  }
  
  function startQuiz() {
    startBtn.style.display = "none";
    showQuestion();
  
    timer = setInterval(function () {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        quizContainer.innerHTML = `<h2>Time's Up!</h2>`;
      }
    }, 1000);
  }
  
  startBtn.addEventListener("click", startQuiz);
 
 function showQuestion() {
  if (currentQuestion >= questions.length) {
    clearInterval(timer);
    showScore();
    return;
  }

  const questionData = questions[currentQuestion];
  let optionsHtml = "";
  questionData.answers.forEach((answer) => {
    optionsHtml += `<input type="radio" name="answer" value="${answer}">${answer}<br>`;
  });

  quizContainer.innerHTML = `
    <h2>${questionData.question}</h2>
    <form id="quiz-form">${optionsHtml}</form>
    <button onclick="checkAnswer()">Next</button>
  `;
}

 function checkAnswer() {
  const form = document.getElementById("quiz-form");
  const selectedAnswer = form.elements["answer"].value;

  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;
  showQuestion();
}

 function showScore() {
  quizContainer.innerHTML = `<h2>Quiz Finished!</h2>
    <p>Your Score: ${score}/${questions.length}</p>`;
}
