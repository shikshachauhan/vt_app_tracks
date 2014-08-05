var ArithmeticQuiz =function(htmlElements) {
  this.score = 0;
  this.questionsAsked = [];
  this.result = htmlElements.result;
  this.question = htmlElements.question;
  this.scoreField = htmlElements.score;
  this.next = htmlElements.next;
  this.totalQuestions = htmlElements.totalQuestions;
}

ArithmeticQuiz.prototype.updateScore = function() {
  var inputAnswer = Number(this.result.val());
  if(this.currentQuestion.answer == inputAnswer) {
    this.score++;
  }
  this.currentQuestion.storeInput(inputAnswer);
  this.scoreField.text(this.score);
};

ArithmeticQuiz.prototype.createQuestion = function() {
  var newQuestion = new Question();
  this.questionsAsked.push(newQuestion);
  newQuestion.init();
  this.currentQuestion = newQuestion;
  this.question.text(this.currentQuestion.question);
  this.result.val('');
};

ArithmeticQuiz.prototype.showResult = function() {
  $('div').hide();
  $('body').append('<div>Your Total Score is ' + this.score + '</div>');
  var _this = this;
  $('body').append(function() {
    var wrongAnswerList = '<div>You gave Following incorrect answers<br/><br/></div>';
    $.each(_this.questionsAsked, function() {
      if(this.answer != this.inputAnswer) {
        wrongAnswerList += '<div>' + this.display() + '</div>';
      }
    })
    return '<div>' + wrongAnswerList + '</div>';
  });
};

ArithmeticQuiz.prototype.checkOverflow = function() {
  if(this.questionsAsked.length == this.totalQuestions) {
    this.showResult();
  } else {
    return false;
  }
};

ArithmeticQuiz.prototype.setNewQuestion = function() {
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
