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

$(function() {
  var quizElements = {
    question: $('#question'),
    result: $('input[name="result"]'),
    score: $('#score'),
    next: $('#next-button'),
    totalQuestions: 3
  };
  var arithmeticQuiz = new ArithmeticQuiz(quizElements);
  arithmeticQuiz.init();
});
