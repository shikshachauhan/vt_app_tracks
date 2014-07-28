function Items(elements) {
  this.list1 = elements.firstList;
  this.list2 = elements.secondList;
  this.add = elements.addButton;
  this.remove = elements.removeButton;
}
Items.prototype.move = function(list1, list2) {
  while(list1.selectedIndex != -1) {
    list2.appendChild(list1.options[list1.selectedIndex]);
  }
}
Items.prototype.bindEvents = function() {
  var _this = this;
  _this.add.addEventListener('click', function() {
    _this.move(_this.list1, _this.list2);
  });
  _this.remove.addEventListener('click', function() {
    _this.move(_this.list2, _this.list1);
  });
}
window.onload = function() {
  var formElements = {
    firstList: list1,
    secondList: list2,
    addButton: add,
    removeButton: remove
  };
  var countries = new Items(formElements);
  countries.bindEvents();
}