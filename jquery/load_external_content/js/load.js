// Create a target div after the headline for each blog post and store 
// a reference to it on the headline element using $.fn.data.

// Bind a click event to the headline that will use the $.fn.load method 
// to load the appropriate content from /exercises/data/blog.html into the target div.

// Don't forget to prevent the default action of the click event.

function LoadContent(elements) {
  this.headLines = elements.headLines;
}

LoadContent.prototype.insertDivisions = function() {
  this.headLines.each(function() {
    var division = $('<div>');
    $(this)
      .after(division)
      .data('division', division);
  });
}

LoadContent.prototype.loadData = function(event) {
  event.preventDefault();

  //get the location hash of url
  var locationHash = $(event.currentTarget)
    .find('a')
      .attr('href')
        .match(/.*(#.*)/)[1];

  $(event.currentTarget)
    .data('division')
      .load('data/blog.html ' + locationHash,
        function(responseTxt, statusTxt, xhr) {
          if(statusTxt == 'error') {
            alert('Error: '+ xhr.status +': '+ xhr.statusText);
          }
        }
  );
}

LoadContent.prototype.bindEvents = function() {
  var _this = this;
  this.headLines.on('click', function(event) {
    _this.loadData(event);
  });
}

LoadContent.prototype.init = function() {
  this.insertDivisions();
  this.bindEvents();
}

$(function() {
  var blogElements = {
    headLines: $('#blog h3')
  };
  var loadBlogContent = new LoadContent(blogElements);
  loadBlogContent.init();
});
