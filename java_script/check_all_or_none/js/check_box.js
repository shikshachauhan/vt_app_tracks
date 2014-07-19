function Checkbox() {
}
Checkbox.prototype.mark = function(value) {
  var checkBox = document.getElementsByName('color');
  for(var i = 0; i < checkBox.length; i++) {
    checkBox[i].checked = value;
  }
}
Checkbox.prototype.addEventHandler = function() {
  document.getElementById('check').onclick = function() {
    Checkbox.prototype.mark(true);
  }
  document.getElementById('uncheck').onclick = function() {
    Checkbox.prototype.mark(false);
  }
}
window.onload = Checkbox.prototype.addEventHandler;
