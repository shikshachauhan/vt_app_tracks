var Checkbox = {
  checkBox : document.getElementsByName('day'),
  none : document.getElementById('none'),
  counter : 0,
  getCheckedDays : function() {
    var checkedDays = []
    for(var i = 0; i < Checkbox.checkBox.length; i++) {
      if(Checkbox.checkBox[i].checked) {
        checkedDays.push(Checkbox.checkBox[i].value);
      }
    }
    return checkedDays;
  },
  alertMessage : function(checkedDays) {
    alert('Only 3 days can be selected.\nYou have already selected '
        + checkedDays[0] + ', ' + checkedDays[1] + ' and ' + checkedDays[2]);
  },

  //checks if more than three checkboxes are marked and takes required actions

  check_greater_than_three : function() {
    if(this.checked) {
      Checkbox.counter++;
      if(Checkbox.counter == 4) {
        this.checked = false;
        Checkbox.counter--;
        var checkedDays = Checkbox.getCheckedDays();
        Checkbox.alertMessage(checkedDays);
      }
    }
    else {
      Checkbox.counter--;
    }
  },
  uncheckAll : function() {
    for(var i = 0; i < Checkbox.checkBox.length; i++) {
      Checkbox.checkBox[i].checked = false;
    }
    Checkbox.counter = 0;
  },
  uncheckNone : function() {
    if(Checkbox.counter == 1) {
      Checkbox.none.checked = false;
    }
  },
  addEventHandler : function() {
    for(var i = 0; i < Checkbox.checkBox.length; i++) {
      Checkbox.checkBox[i].addEventListener
          ('change', Checkbox.check_greater_than_three, false);
      Checkbox.checkBox[i].addEventListener
          ('change', Checkbox.uncheckNone, false);
    }
    Checkbox.none.onchange = Checkbox.uncheckAll;
  }
};
window.onload = function() {
  Checkbox.addEventHandler();
  Checkbox.none.checked = true;
}
