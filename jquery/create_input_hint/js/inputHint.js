function InputHint(elements) {
  this.searchBox = elements.searchBox;
  this.label = elements.label;
}
InputHint.prototype.setHint = function() {
  this.searchBox.val(this.label.text())
    .addClass('hint');
}
InputHint.prototype.removeHint = function() {
  if(this.searchBox.val() == this.label.text()) {
    this.searchBox
      .val('')
      .removeClass('hint');
  }
}
InputHint.prototype.manageInputHint = function() {
  //Set the value of the search input to the text of the label element
  //Add a class of "hint" to the search input
  var _this = this;
  this.setHint();

  //Remove the label element
  this.label.remove();

  //Bind a focus event to the search input that removes the hint text and the "hint" class
  this.searchBox.on('focus', function() {
    _this.removeHint();
  });

  //Bind a blur event to the search input that restores the hint text and "hint" class
  //if no search text was entered
  this.searchBox.on('blur', function() {
    if(!_this.searchBox.val().trim()) {
      _this.setHint();
    }
  });
}
$(function() {
  var hintElements = {
    searchBox: $('input[name="q"]'),
    label: $('label[for="q"]')
  }
  var inputHint = new InputHint(hintElements);

  inputHint.manageInputHint();
});
