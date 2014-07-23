var catalog = {
  parent : document.getElementsByClassName('parent')
}
catalog.toggleChildDisplay = function() {
  var child = document.getElementsByClassName(this.id)[0];
  if(child.style.display == 'block') {
    child.style.display = 'none' ;
  } else {
    child.style.display = 'block' ;
    this.scrollIntoView();
  }
}
catalog.toggleChildState = function() {
  var child = document.getElementsByName(this.id);
  for(var i = 0; i < child.length; i++) {
    child[i].checked = this.checked ;
  }
}
catalog.setChildDisplay = function() {
  for(var i = 0; i < catalog.parent.length; i++) {
    document.getElementsByClassName
    (catalog.parent[i].id)[0].style.display = 'none';
  }
}
catalog.bindEvents = function() {
  for(var i = 0; i < catalog.parent.length; i++) {
    catalog.parent[i].addEventListener
    ('change', catalog.toggleChildDisplay, false);
    catalog.parent[i].addEventListener
    ('change', catalog.toggleChildState, false);
  }
}
window.onload = function() {
  catalog.bindEvents();
  catalog.setChildDisplay();
}
