/*Create a Store Front page by reading this data and show a rectagular grid of products on the page.
 *
 *Have a drop down at the top to sort products by 1. Color 2. Brand 3. Name 4. Availability.
 *One of these values can be selected at a time. The page reorders when the selected sort value is changed.*/
var ProductGrid = function(htmlElements) {
  this.gridContainer = htmlElements.gridContainer;
  this.brand = htmlElements.brand;
  this.color = htmlElements.color;
  this.available = htmlElements.available;
}

ProductGrid.prototype.loadData = function() {
  var _this = this;
  $.getJSON('data/product.json', {
        dataType: 'json'
      },
      function(data) {
        $.each(data, function() {
            var newImage = $('<img>', {
              src: 'images/' + this['url']
            });
            var newSpan = $('<span>');
            newSpan.append(newImage)
              .data('color', this['color'])
              .data('brand', this['brand'])
              .data('sold_out', this['sold_out']);
            _this.gridContainer.append(newSpan);
          }
        );
      }
  );
  this.productList = this.gridContainer.find('span');
  this.currentlyVisibleProducts = this.productList;
};

ProductGrid.prototype.brandFilter = function(event) {
  this.productList.filter(function() {
    return (this.data('brand') == $(event).val());
  }).toggle();
};

ProductGrid.prototype.colorFilter = function() {
  this.productList.filter(':visible').filter(function() {
    return (this.data('color') == $(event).val());
  }).toggle();
};

ProductGrid.prototype.availableFilter = function(event) {
  this.productList.filter(':visible').filter(function() {
    return (this.data('sold_out') == '1');
  }).toggle();
};

ProductGrid.prototype.bindEvents = function() {
  var _this = this;
  _this.brand.on('change', function(event) {
    _this.brandFilter();
  });
  _this.color.on('change', function(event) {
    _this.colorFilter();
  });
  _this.brand.on('change', function(event) {
    _this.availableFilter();
  });
};

ProductGrid.prototype.init = function() {
  this.loadData();
  this.bindEvents();
};

$(function() {
  var htmlElements = {
    gridContainer: $('#grid'),
    brand: $('input[name="brand"]'),
    color: $('input[name="color"]'),
    available: $('input[name="available"]')
  };
  var productGrid = new ProductGrid(htmlElements);
  productGrid.init();
  console.log($('span'))
});
