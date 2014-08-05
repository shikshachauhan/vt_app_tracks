/*Create a target div after the headline for each blog post and store 
*a reference to it on the headline element using $.fn.data.
*
*Bind a click event to the headline that will use the $.fn.load method 
*to load the appropriate content from /exercises/data/blog.html into the target div.*/

function LoadContent(headLines) {
  this.headLines = headLines;
}

LoadContent.prototype.insertDivisions = function() {
  this.headLines.each(function(index) {
    var division = $('<div>', {
      id: 'division' + index
    });
    var divisionId = '#division' + index;
    $(this)
      .after(division)
      .data('division', $(divisionId));
  });
}

LoadContent.prototype.loadData = function(event) {
  event.preventDefault();

  //get url of data
  var url = $(event.currentTarget)
    .find('a')
      .attr('href');

  //get the location hash of url
  var locationHash = url.match(/.*(#.*)/)[1];

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
  var loadBlogContent = new LoadContent($('#blog h3'));
  loadBlogContent.init();
});
