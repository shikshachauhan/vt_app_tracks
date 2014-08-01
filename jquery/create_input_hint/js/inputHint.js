function InputHint(elements) {
  this.searchBox = elements.searchBox;
  this.hintText = this.removeLabel(elements.label);
}

//Remove the label element
InputHint.prototype.removeLabel = function(label) {
  return label
    .remove()
    .text();
}

InputHint.prototype.setHint = function() {
  this.searchBox.val(this.hintText)
    .addClass('hint');
}

InputHint.prototype.removeHint = function() {
  if(this.searchBox.val() == this.hintText) {
    this.searchBox
      .val('')
      .removeClass('hint');
  }
}

InputHint.prototype.bindEvents = function() {
  //Bind a focus event to the search input that removes the hint text and the "hint" class

  //Bind a blur event to the search input that restores the hint text and "hint" class
  //if no search text was entered
  var _this = this;
  this.searchBox.on('focus', function() {
    _this.removeHint();
  }).on('blur', function() {
    if(!_this.searchBox.val().trim()) {
      _this.setHint();
    }
  });
}

InputHint.prototype.init = function() {
  //Set the value of the search input to the text of the label element
  //Add a class of "hint" to the search input
  this.setHint();
  this.bindEvents();
}
$(function() {
  var hintElements = {
    searchBox: $('input[name="q"]'),
    label: $('label[for="q"]')
  }
  var inputHint = new InputHint(hintElements);

  inputHint.init();
});
