function MoveItems(list1, list2, add, remove) {
  this.list1 = list1;
  this.list2 = list2;
  this.add = add;
  this.remove = remove;
}
MoveItems.prototype.move = function(list1, list2) {
  while(list1.selectedIndex != -1) {
    list2.appendChild(list1.options[list1.selectedIndex]);
  }
}
MoveItems.prototype.bindEvents = function() {
  var countries = this;
  this.add.addEventListener('click', function() {
    countries.move(countries.list1, countries.list2);
  });
  this.remove.addEventListener('click', function() {
    countries.move(countries.list2, countries.list1);
  });
}
window.onload = function() {
  var list1 = document.getElementById('list1'),
      list2 = document.getElementById('list2'),
      add = document.getElementById('add'),
      remove = document.getElementById('remove'),
      countries = new MoveItems(list1, list2, add, remove);
  countries.bindEvents();
}