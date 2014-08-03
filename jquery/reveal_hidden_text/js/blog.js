/*Clicking on a headline in the #blog div should slide down the excerpt paragraph
*
*Clicking on another headline should slide down its excerpt paragraph,
*and slide up any other currently showing excerpt paragraphs.*/
function AddInteractivity(htmlElements) {
  this.elements = htmlElements.elements;
  this.slidedDownElement = htmlElements.elements.find('p.excerpt').first();
}

AddInteractivity.prototype.slideDownElement = function(event) {
  event.preventDefault();

  //slideUp currently slided down Element
  this.slidedDownElement.slideUp();

  //change value of currently slided down Element and slide it down
  this.slidedDownElement = $(event.currentTarget)
    .find('p.excerpt')
      .slideDown();
}

AddInteractivity.prototype.bindEvents = function() {
  var _this = this;
  this.elements.on('click', function(event) {
    _this.slideDownElement(event);
  });
}

$(function() {
  var blogElements = {
    elements: $('#blog li')
  };
  var addBlogInteractivity = new AddInteractivity(blogElements);
  addBlogInteractivity.bindEvents();
});
