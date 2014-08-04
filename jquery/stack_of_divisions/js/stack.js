/*Create a stack of divs. Initially an empty container should display
*- a button on right side says "add item", should add a div to the stack
* with an incremental number(starting from 1) 
*- clicking any item in the stack should highlight that item
*- clicking the last item on the stack should remove that item from the stack
*
*hint: use jquery live or delegate. live method is deprecated in latest
version of jQuery so you may want to use on()*/

function DivisionStack(htmlElements) {
  this.pushButton = htmlElements.pushButton;
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
  if(event.target != event.currentTarget) {
    $(event.target).css('background-color', 'yellow');
  }
}

DivisionStack.prototype.popDivision = function(event) {
  this.top--;
  $(event.target).remove();
}

DivisionStack.prototype.bindEvents = function() {
  var _this = this;
  this.pushButton.on('click', function() {
    _this.pushDivision();
  });
  this.container.on('click', function(event) {
    if(Number($(event.target).text()) == _this.top) {
      _this.popDivision(event);
    } else {
      _this.highlightDivision(event);
    }
  });
};

$(function() {
  var divisionElements = {
    container: $('#container'),
    pushButton: $('#push')
  };
  var divisionStack = new DivisionStack(divisionElements);
  divisionStack.bindEvents();
});