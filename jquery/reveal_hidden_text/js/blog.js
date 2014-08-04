/*Clicking on a headline in the #blog div should slide down the excerpt paragraph
*
*Clicking on another headline should slide down its excerpt paragraph,
*and slide up any other currently showing excerpt paragraphs.*/
function AddBlogInteractivity(htmlElements) {
  this.blogElements = htmlElements.blogElements;
  this.slidedDownElement = htmlElements.blogElements.find('p.excerpt :first-child');
}

AddBlogInteractivity.prototype.slideDownElement = function(event) {
  event.preventDefault();

  //slideUp currently slided down Element
  this.slidedDownElement.slideUp();

  //change value of currently slided down Element and slide it down
  this.slidedDownElement = $(event.currentTarget).find('p.excerpt');
  this.slidedDownElement.slideDown();
}

AddBlogInteractivity.prototype.bindEvents = function() {
  var _this = this;
  this.blogElements.on('click', function(event) {
    _this.slideDownElement(event);
  });
}

$(function() {
  var htmlElements = {
    blogElements: $('#blog li')
  };
  var addBlogInteractivity = new AddBlogInteractivity(htmlElements);
  addBlogInteractivity.bindEvents();
});
