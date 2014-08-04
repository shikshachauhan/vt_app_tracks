/*Create a quiz, which asks 20 mathematical questions to the participant, one at a time.
*
*The quiz should generate two random numbers less than 20 and then pick an operator randomly 
*( add, subtract, divide, multiply)
*
*Ask the question to the user and evaluate it when the user moves to the next screen 
*and show the score at the bottom.
*
*User should not be allowed to go back and edit answers.
*
*Show them the final score and correct answers for any wrong question on the last screen.*/

function ArithmeticQuiz(htmlElements) {
  this.operators = ['+', '-', '/', '*'];
  this.wrongAnswers = [];
  this.score = 0;
  this.questionsAsked = 0;
  this.question = htmlElements.question;
  this.result = htmlElements.result;
  this.scoreField = htmlElements.score;
  this.next = htmlElements.next;
  this.totalQuestions = htmlElements.totalQuestions;
}

ArithmeticQuiz.prototype.evaluateExpression = function() {
  this.correctResult = eval(this.currentQuestion);
};

ArithmeticQuiz.prototype.updateScore = function() {
  if(this.correctResult == Number(this.result.val())) {
    this.score++;
  }
  else {
    this.wrongAnswers.push(this.currentQuestion + '=' + this.correctResult)
  }
  this.scoreField.text(this.score);
};

ArithmeticQuiz.prototype.createQuestion = function() {
  this.currentQuestion = Math.floor(Math.random() * 20) +
    this.operators[Math.floor(Math.random() * 4)] + Math.floor(Math.random() * 20);
    this.question.text(this.currentQuestion);
    this.result.val('');
    this.questionsAsked++;
};

ArithmeticQuiz.prototype.showResult = function() {
  $('div').hide();
  $('body').append('<div>Your Total Score is ' + this.score + '</div>');
  var _this = this;
  $('body').append(function() {
    var wrongAnswerList = '<div>You gave Following incorrect answers<br/><br/></div>';
    $.each(_this.wrongAnswers, function() {
      wrongAnswerList += '<div>' + this + '</div>';
    })
    return '<div>' + wrongAnswerList + '</div>';
  });
};

ArithmeticQuiz.prototype.checkOverflow = function() {
    if(this.questionsAsked == this.totalQuestions) {
      this.showResult();
    } else {
      return false;
    }
};

ArithmeticQuiz.prototype.setNewQuestion = function() {
  this.evaluateExpression();
  this.updateScore();
  if(!this.checkOverflow()) {
    this.createQuestion();
  }
};

ArithmeticQuiz.prototype.init = function() {
  var _this = this;
  this.scoreField.text(0);
  this.createQuestion();
  this.next.on('click', function() {
    _this.setNewQuestion();
  });
};

$(function() {
  var quizElements = {
    question: $('#question'),
    result: $('input[name="result"]'),
    score: $('#score'),
    next: $('#next-button'),
    totalQuestions: 20
  };
  var arithmeticQuiz = new ArithmeticQuiz(quizElements);
  arithmeticQuiz.init();
});
