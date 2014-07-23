function SelectCountries(list, choosenList, add, remove) {
  this.list = list;
  this.choosenList = choosenList;
  this.add = add;
  this.remove = remove;
}
SelectCountries.prototype.move = function(list1, list2) {
  list2.appendChild(list1.options[list1.selectedIndex]);
}
SelectCountries.prototype.bindEvents = function() {
  var countries = this;
  this.add.addEventListener('click', function() {
    countries.move(countries.list, countries.choosenList);
  });
  this.remove.addEventListener('click', function() {
    countries.move(countries.choosenList, countries.list);
  });
}
window.onload = function() {
  var list = document.getElementById('list');
  var choosenList = document.getElementById('choosen_list');
  var add = document.getElementById('add');
  var remove = document.getElementById('remove');
  countries = new SelectCountries(list, choosenList, add, remove);
  countries.bindEvents();
}