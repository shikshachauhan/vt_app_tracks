function NumericTest() {
}
NumericTest.prototype.pattern = /^(([\d]+)|(-[\d]+))$/ ;
NumericTest.prototype.checkNumeric = function(event) {
var num = document.getElementById('num').value;
var result = document.getElementById('result');
  result.value = NumericTest.prototype.pattern.test(num);
  event.preventDefault();
}
NumericTest.prototype.bindEvents = function() {
  var number = this;
  document.forms[0].addEventListener('submit', function(event) {
    number.checkNumeric(event);
  });
};
window.onload = function() {
  number = new NumericTest();
  number.bindEvents();
}
