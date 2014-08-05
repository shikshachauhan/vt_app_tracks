var Question = function() {
  this.operators = ['+', '-', '/', '*'];
}

Question.prototype.init = function(first_argument) {
  this.question = Math.floor(Math.random() * 20) +
    this.operators[Math.floor(Math.random() * 4)] + Math.floor(Math.random() * 20);
  this.answer = (eval(this.question)).toFixed(2);
};
Question.prototype.display = function() {
  return this.question + ' = ' + this.answer
}
Question.prototype.storeInput = function(answer) {
  this.inputAnswer = answer;
}
