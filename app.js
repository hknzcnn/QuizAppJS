function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// Question Prototype
Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

// Quiz Constructor
function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}
// Quiz Prototype
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

// Quiz isFinish
Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionIndex;
};
// Quiz Guess
Quiz.prototype.guess = function (answer) {
  var question = this.getQuestion();
  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};

let q1 = new Question(
  " Can I park here? ",
  ["Sorry, I did that.", "It's the same place", "Only for half an hour."],
  "Only for half an hour."
);

let q2 = new Question(
  "What colour will you paint the children's bedroom?",
  ["I hope it was right.", "We can't decide.", "It wasn't very difficult."],
  "We can't decide."
);

let q3 = new Question(
  "I can't understand this email.",
  ["Would you like some help?", "Don't you know?", "I suppose you can."],
  "Would you like some help?"
);

let q4 = new Question(
  "I'd like two tickets for tomorrow night.",
  [
    "How much did you pay?",
    "Afternoon and evening.",
    "I'll just check for you.",
  ],
  "I'll just check for you."
);

let q5 = new Question(
  "Shall we go to the gym now?",
  ["I'm too tired.", "It's very good.", "Not at all."],
  "I'm too tired."
);

let q6 = new Question(
  "She _______ a student. She's a teacher",
  ["aren't", "isn't", "not"],
  "isn't"
);

let q7 = new Question(
  "My mum doesn't like ______ to work.",
  ["drive", "driving", " to driving"],
  "drive"
);

let q8 = new Question("What……………their names?", ["are", "does", "is"], "are");

let q9 = new Question(
  "Alice: Do you live in Istanbul? Mary:……………………",
  ["Yes,I live", "Yes,I do", "Yes,I does"],
  "Yes,I do"
);

let q10 = new Question(
  " Julia: Did you have lunch at home yesterday? Tom:……………………",
  ["No,I do not", "No,I didn’t", "No,I haven’t"],
  "No,I didn’t"
);
let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// Start Quiz

let quiz = new Quiz(questions);

loadQuestion();
function loadQuestion() {
  if (quiz.isFinish()) {
    showScore();
  } else {
    let question = quiz.getQuestion();
    let choices = question.choices;

    document.querySelector("#question").textContent = question.text;
    for (let i = 0; i < choices.length; i++) {
      let element = document.querySelector("#choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}
function guess(id, guess) {
  let btn = document.getElementById(id);
  btn.onclick = function () {
    quiz.guess(guess);
    loadQuestion();
  };
}
function showScore() {
  let html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
  document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {
  let totalQuestion = quiz.questions.length;
  let questionNumber = quiz.questionIndex + 1;
  document.querySelector("#progress").innerHTML =
    "Question " + questionNumber + "of " + totalQuestion;
}
