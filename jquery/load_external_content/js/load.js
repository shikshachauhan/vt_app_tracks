/*Create a target div after the headline for each blog post and store 
*a reference to it on the headline element using $.fn.data.
*
*Bind a click event to the headline that will use the $.fn.load method 
*to load the appropriate content from /exercises/data/blog.html into the target div.*/

function Blog(headLines) {
  this.headLines = headLines;
}

Blog.prototype.insertDivisions = function() {
  this.headLines.each(function(index) {
      var division = $('<div>', {
          id: 'division' + index
        }
      ),
          divisionId = '#division' + index;
      $(this).after(division).data('division', divisionId);
    }
  );
}

Blog.prototype.load = function() {
  var $this = $(this);

  //get url of data
  var url = $this.find('a').attr('href');

  //get the location hash of url
  var locationHash = url.match(/.*(#.*)/)[1];

  $($this.data('division'))
    .load('data/blog.html ' + locationHash,
      function(responseTxt, statusTxt, xhr) {
        if(statusTxt == 'error') {
          alert('Error: ' + xhr.status + ': ' + xhr.statusText);
        }
      }
    );
}

Blog.prototype.bindEvents = function() {
  this.headLines.on('click', function(event) {
      event.preventDefault();
    }
  );
  this.headLines.one('click', this.load);
}

Blog.prototype.init = function() {
  this.insertDivisions();
  this.bindEvents();
}

$(function() {
    var blog = new Blog($('#blog h3'));
    blog.init();
  }
);
