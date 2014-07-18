function Checkbox() {
}
Checkbox.prototype.mark = function(value) {
  var checkBox = document.getElementsByClassName('checkbox');
  for(var i = 0; i < checkBox.length; i++) {
    checkBox[i].checked = value;
  }
}
Checkbox.prototype.addEventHandler = function() {
  window.document.getElementById('check').onclick = function() {
    Checkbox.prototype.mark(true);
  }
  window.document.getElementById('uncheck').onclick = function() {
    Checkbox.prototype.mark(false);
  }
}
window.onload = Checkbox.prototype.addEventHandler;
