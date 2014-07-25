function NumericTest(text, result, form) {
  this.text = text;
  this.result = result;
  this.form = form;
}
NumericTest.prototype.pattern = /^(([\d]+)|(-[\d]+))$/ ;
NumericTest.prototype.checkNumeric = function(event, input) {
  input.result.value = input.pattern.test(input.text.value);
  event.preventDefault();
}
NumericTest.prototype.bindEvents = function() {
  var input = this;
  input.form.addEventListener('submit', function(event) { 
    input.checkNumeric(event, input);
  });
}
window.onload = function() {
  var text = document.getElementById('text'),
      result = document.getElementById('result'),
      form = document.forms[0],
      input = new NumericTest(text, result, form);
  input.bindEvents();
}
