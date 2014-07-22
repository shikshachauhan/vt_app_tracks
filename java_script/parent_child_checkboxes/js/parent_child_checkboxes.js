var Checkbox = {
  parent : document.getElementsByClassName('parent')
}
Checkbox.toggleChildDisplay = function() {
  var child = document.getElementsByClassName(this.id)[0];
  if(child.style.display == 'block') {
    child.style.display = 'none';
  }
  else {
    child.style.display = 'block';
    this.scrollIntoView();
  }
}
Checkbox.toggleChildState = function() {
  var child = document.getElementsByName(this.id);
  if(this.checked) {
    var value = true;
  }
  else {
    var value = false;
  }
  for(var i = 0; i < child.length;i++) {
      child[i].checked = value;
  }
}
Checkbox.setChildDisplay = function() {
  for(var i = 0; i < Checkbox.parent.length; i++) {
    document.getElementsByClassName
    (Checkbox.parent[i].id)[0].style.display = 'none';
  }
}
Checkbox.bindEvents = function() {
  for(var i = 0; i < Checkbox.parent.length; i++) {
    Checkbox.parent[i].addEventListener
    ('change', Checkbox.toggleChildDisplay, false);
    Checkbox.parent[i].addEventListener
    ('change', Checkbox.toggleChildState, false);
  }
}
window.onload = function() {
  Checkbox.bindEvents();
  Checkbox.setChildDisplay();
}
