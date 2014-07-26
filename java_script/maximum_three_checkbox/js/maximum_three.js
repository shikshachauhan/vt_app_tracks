function CheckboxGroup(checkBoxes, none) {
  this.checkBoxes = checkBoxes ;
  this.none = none ;
  this.checkedBoxes = [];
}
CheckboxGroup.prototype.alertMessage = function() {
  alert('Only 3 days can be selected.\nYou have already selected '
    + this.checkedBoxes[0].value + ', ' + this.checkedBoxes[1].value +
    ' and ' + this.checkedBoxes[2].value);
}
CheckboxGroup.prototype.addChecked = function(event) {
  if(event.target.checked) {
    this.none.checked = false;
    this.checkedBoxes.push(event.target);
  }
}
CheckboxGroup.prototype.checkOverflow = function(event) {
  if(this.checkedBoxes.length == 4) {
    event.target.checked = false;
    this.alertMessage();
  }
}
CheckboxGroup.prototype.removeChecked = function(event) {
  if(!event.target.checked) {
    var index = this.checkedBoxes.indexOf(event.target);
    this.checkedBoxes.splice(index, 1);
  }
}
CheckboxGroup.prototype.uncheckAll = function() {
  for(var i in this.checkedBoxes) {
    this.checkedBoxes[i].checked = false;
  }
  this.checkedBoxes = [];
}
CheckboxGroup.prototype.bindEvents = function() {
  var lenght = this.checkBoxes.length,
      checkboxGroup = this;
  for(var i = 0; i < lenght; i++) {
    this.checkBoxes[i].addEventListener('change', function(event) {
      checkboxGroup.addChecked(event);
    });
    this.checkBoxes[i].addEventListener('change', function(event) {
      checkboxGroup.checkOverflow(event);
    });
    this.checkBoxes[i].addEventListener('change', function(event) {
      checkboxGroup.removeChecked(event);
    });

  }
  this.none.addEventListener('change', function() {
    checkboxGroup.uncheckAll();
  });
}
CheckboxGroup.prototype.init = function() {
  this.none.checked = true;
}
window.onload = function() {
  var days = document.getElementsByName('day'),
      weekDays = new CheckboxGroup(days, none);
  weekDays.init();
  weekDays.bindEvents();
}
