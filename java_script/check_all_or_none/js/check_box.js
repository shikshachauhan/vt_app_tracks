function Checkbox() {
}
var checkBoxPrototype = Checkbox.prototype
checkBoxPrototype.mark = function(value) {
  var checkBox = document.getElementsByName('color');
  for(var i = 0; i < checkBox.length; i++) {
    checkBox[i].checked = value;
  }
}
checkBoxPrototype.addEventHandler = function() {
  document.getElementById('check').onclick = function() {
    checkBoxPrototype.mark(true);
  }
  document.getElementById('uncheck').onclick = function() {
    checkBoxPrototype.mark(false);
  }
}
window.onload = checkBoxPrototype.addEventHandler;
