function InputHint(searchBox, label, hintClass) {
  this.searchBox = searchBox;
  this.label = label;
  this.hintClass = hintClass;
}
InputHint.prototype.setHint = function() {
  this.searchBox.val(this.label.text());
}
InputHint.prototype.addHintClass = function() {
  this.searchBox.addClass(this.hintClass);
}
InputHint.prototype.removeLabel = function() {
  this.label.remove();
};
InputHint.prototype.removeHint = function() {
  var _this = this;
  this.searchBox.on('focus', function() {
    $(_this.searchBox)
      .val('')
      .removeClass(_this.hintClass);
  })
}
InputHint.prototype.restoreHint = function() {
  var _this = this;
  this.searchBox.on('blur', function() {
    _this.setHint();
    _this.addHintClass();
  })
}
$(function() {
  var inputHint = new InputHint($('input[name="q"]'), $('label[for="q"]'), 'hint');

  //Set the value of the search input to the text of the label element
  inputHint.setHint();

  //Add a class of "hint" to the search input
  inputHint.addHintClass();

  //Remove the label element
  inputHint.removeLabel()

  //Bind a focus event to the search input that removes the hint text and the "hint" class
  inputHint.removeHint();

  //Bind a blur event to the search input that restores the hint text and "hint" class
  //if no search text was entered
  inputHint.restoreHint();
});
