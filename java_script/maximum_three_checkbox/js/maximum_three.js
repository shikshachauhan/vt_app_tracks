function CheckboxGroup(checkBoxes, none) {
  this.checkBoxes = checkBoxes ;
  this.none = none ;
  this.checkedBoxes = [];
}

CheckboxGroup.prototype.uncheckAllDay = function() {
  var checkBoxesCount = this.checkBoxes.length;
  for(var i = 0; i < checkBoxesCount; i++) {
    this.checkBoxes[i].checked = false;
  }
};

CheckboxGroup.prototype.alertMessage = function() {
  alert('Only 3 days can be selected.\nYou have already selected '
    + this.checkedBoxes[0].value + ', ' + this.checkedBoxes[1].value +
    ' and ' + this.checkedBoxes[2].value);
}

CheckboxGroup.prototype.addChecked = function(event) {
  this.none.checked = false;
  if(!this.checkOverflow(event)) {
    this.checkedBoxes.push(event.target.id);
  }
}

CheckboxGroup.prototype.checkOverflow = function(event) {
  if(this.checkedBoxes.length == 3) {
    event.target.checked = false;
    this.alertMessage();
    return true;
  }
  return false;
}

CheckboxGroup.prototype.removeChecked = function(event) {
  var index = this.checkedBoxes.indexOf(event.target);
  this.checkedBoxes.splice(index, 1);
}

CheckboxGroup.prototype.uncheckAllChecked = function() {
  for(var i in this.checkedBoxes) {
    document.getElementById(this.checkedBoxes[i]).checked = false;
  }
  this.checkedBoxes = [];
}

CheckboxGroup.prototype.manageCheckBoxGroup = function(event) {
  if(event.target.checked) {
    this.addChecked(event);
  }
  else {
    this.removeChecked(event);
  }
}

CheckboxGroup.prototype.bindEvents = function() {
  var groupSize = this.checkBoxes.length,
      checkboxGroup = this;
  for(var i = 0; i < groupSize; i++) {
    this.checkBoxes[i].addEventListener('change', function(event) {
      checkboxGroup.manageCheckBoxGroup(event);
    });
  }
  this.none.addEventListener('change', function() {
    checkboxGroup.uncheckAllChecked();
  });
}

CheckboxGroup.prototype.init = function() {
  this.none.checked = true;
  this.uncheckAllDay();
}

window.onload = function() {
  var days = document.getElementsByName('day'),
      weekDays = new CheckboxGroup(days, none);
  weekDays.init();
  weekDays.bindEvents();
}
