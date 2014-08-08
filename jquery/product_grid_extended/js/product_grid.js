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

ProductGrid.prototype.createImageElements = function(product) {
  var newImage = $('<img>', {
        src: 'images/' + product['url']
      }),
      newSpan = $('<span>');
  newSpan.append(newImage).data('product', product);
  this.gridContainer.append(newSpan);
};

ProductGrid.prototype.loadImages = function(data) {
  var _this = this;
  $.each(data, function() {
      _this.createImageElements(this);
    }
  );
  _this.productList = _this.gridContainer.find('span');
  _this.currentlyVisible = _this.productList;
};

ProductGrid.prototype.loadData = function() {
  var _this = this;
  $.getJSON('data/product.json', {
        dataType: 'json',
      },
      function(data) {
        _this.loadImages(data);
      }
  );
};

ProductGrid.prototype.availableBrands = function() {
  var _this = this;
  return this.productList.filter(function() {
      var checkedBrands = _this.brand.filter(':checked'),
      count = checkedBrands.length;
      for(var i = 0; i < count; i++) {
        if(checkedBrands[i].value == $(this).data('product')['brand']) {
          return true;
        }
      }
      return false;
    }
  );
};

ProductGrid.prototype.availableColors = function(products) {
  var _this = this;
  return products.filter(function() {
      var checkedColors = _this.color.filter(':checked'),
      count = checkedColors.length;
      for(var i = 0; i < count; i++) {
        if(checkedColors[i].value == $(this).data('product')['color']) {
          return true;
        }
      }
      return false;
    }
  );
};

ProductGrid.prototype.availableStock = function(products) {
  if(this.available.filter(':checked').val() == '0') {
    var products = products.filter(function() {
        return $(this).data('product')['sold_out'] == '0';
      }
    );
  }
  return products;
};

ProductGrid.prototype.filterByBrand = function(event) {
  var $target = $(event.target);
  var _this = this;

  var filteredProducts = this.productList.filter(function() {
      return $target.val() == $(this).data('product')['brand'];
    }
  );

  filteredProducts = this.availableColors(filteredProducts);
  filteredProducts = this.availableStock(filteredProducts);
  filteredProducts.toggle();
}

ProductGrid.prototype.filterByColor = function(event) {
  var _this = this,
      $target = $(event.target);

  var filteredProducts = this.availableBrands();
  filteredProducts = filteredProducts.filter(function() {
      return $target.val() == $(this).data('product')['color'];
    }
  );

  filteredProducts = this.availableStock(filteredProducts);
  filteredProducts.toggle();
}

ProductGrid.prototype.filterByAvailability = function(event) {
  var _this = this;
  var filteredProducts = this.availableBrands();
  filteredProducts = this.availableColors(filteredProducts);
  
  filteredProducts.filter(function() {
      return $(this).data('product')['sold_out'] == '1';
    }
  ).toggle();
}

ProductGrid.prototype.bindBrandEvent = function() {
  var _this = this;
  _this.brand.on('change', function(event) {
      _this.filterByBrand(event);
    }
  );
};

ProductGrid.prototype.bindColorEvent = function() {
  var _this = this;
  _this.color.on('change', function(event) {
      _this.filterByColor(event);
    }
  );
};

ProductGrid.prototype.bindAvailableEvent = function() {
  var _this = this;
  _this.available.on('change', function(event) {
      _this.filterByAvailability(event);
    }
  );
};

ProductGrid.prototype.bindEvents = function() {
  this.bindBrandEvent();
  this.bindColorEvent();
  this.bindAvailableEvent();
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
});
