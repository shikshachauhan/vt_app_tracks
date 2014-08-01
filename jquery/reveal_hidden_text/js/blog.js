/*Clicking on a headline in the #blog div should slide down the excerpt paragraph
*
*Clicking on another headline should slide down its excerpt paragraph,
*and slide up any other currently showing excerpt paragraphs.*/
function InteractiveBlog(elements) {
  this.blogs = elements.blogs;
  this.currentlyDown = elements.blogs.find('p.excerpt').first();
}

InteractiveBlog.prototype.showExcerpt = function(event) {
  event.preventDefault();
  this.currentlyDown.slideUp();
  this.currentlyDown = $(event.currentTarget)
    .find('p.excerpt')
      .slideDown();
}

InteractiveBlog.prototype.bindEvents = function() {
  var _this = this;
  this.blogs.on('click', function(event) {
    _this.showExcerpt(event);
  });
}

$(function() {
  var blogElements = {
    blogs: $('#blog li')
  };
  var interactiveBlog = new InteractiveBlog(blogElements);
  interactiveBlog.bindEvents();
});
