/*Create a Store Front page by reading this data and show a rectagular grid of products on the page.
 *
 *Have a drop down at the top to sort products by 1. Color 2. Brand 3. Name 4. Availability.
 *One of these values can be selected at a time. The page reorders when the selected sort value is changed.*/
var ProductGrid = function(htmlElements) {
  this.gridContainer = htmlElements.gridContainer;
  this.productProperties = htmlElements.productProperties;
}

ProductGrid.prototype.loadData = function() {
  var _this = this;
  $.getJSON('data/product.json', {
    dataType: 'json',
  }, function(data) {
    $.each(data, function() {
      var newImage = $('<img>', {
        src: 'images/' + this['url']
      });
      newImage.data('product', this);
      _this.gridContainer.append(newImage);
    });
  });
};

ProductGrid.prototype.sortElements = function() {
  var sortBy = this.productProperties.val();
  var elements = this.gridContainer.find('img');
  elements.sort(function(a, b) {
    var a_product = $(a).data('product');
    var b_product = $(b).data('product');

    if(a_product[sortBy] < b_product[sortBy]) {
      return -1;
    }
    if(a_product[sortBy] > b_product[sortBy]) {
      return 1;
    }
    return 0;
  });
  elements.detach().appendTo(this.gridContainer);
}

ProductGrid.prototype.bindEvents = function() {
  var _this = this;
  _this.productProperties.on('change', function(event) {
  _this.sortElements();
  });
};

ProductGrid.prototype.init = function() {
  this.loadData();
  this.bindEvents();
};

$(function() {
  var htmlElements = {
    gridContainer: $('#grid'),
    productProperties: $('#properties')
  };
  var productGrid = new ProductGrid(htmlElements);
  productGrid.init();
});
