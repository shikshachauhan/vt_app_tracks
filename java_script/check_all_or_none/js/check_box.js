function Checkbox() {
}
Checkbox.prototype.mark = function(value) {
  var checkBox = document.getElementsByClassName('checkbox');
  for(var i = 0; i < checkBox.length; i++) {
    checkBox[i].checked = value;
  }
}
window.onload = function() {
  document.getElementById('check').onclick = function() {
    Checkbox.prototype.mark(true);
  }
  document.getElementById('uncheck').onclick = function() {
    Checkbox.prototype.mark(false);
  }
}
