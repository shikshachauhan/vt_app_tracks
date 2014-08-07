/*Create a stack of divs. Initially an empty container should display
*- a button on right side says "add item", should add a div to the stack
* with an incremental number(starting from 1) 
*- clicking any item in the stack should highlight that item
*- clicking the last item on the stack should remove that item from the stack
*
*hint: use jquery live or delegate. live method is deprecated in latest
version of jQuery so you may want to use on()*/

function DivisionStack(htmlElements) {
  this.addButton = htmlElements.addButton;
  this.container = htmlElements.container;
  this.top = 0;
}

DivisionStack.prototype.pushDivision = function() {
  var newDivision = $('<div>', {
    text: ++this.top
  });
  this.container.prepend(newDivision);
};

DivisionStack.prototype.highlightDivision = function(event) {
    $(this).css('background-color', 'yellow');
}

DivisionStack.prototype.popDivision = function(event) {
  this.top --;
  $(event.target).remove();
}

DivisionStack.prototype.bindAddButtonEvent = function() {
  var _this = this;
  _this.addButton.on('click', function() {
    _this.pushDivision();
  });
};

DivisionStack.prototype.bindStackEvents = function() {
  var _this = this;
  _this.container.on('click', 'div:first', function(event) {
    _this.popDivision(event);
  });
  _this.container.on('click', 'div:not(div:first)', _this.highlightDivision);
};

DivisionStack.prototype.bindEvents = function() {
  this.bindAddButtonEvent();
  this.bindStackEvents();
};

$(function() {
  var divisionElements = {
    container: $('#container'),
    addButton: $('#push')
  };
  var divisionStack = new DivisionStack(divisionElements);
  divisionStack.bindEvents();
});