var DisplayManager = function(ulElements) {
  this.ulElements = ulElements;
  this.unorderedListArray = [];
}

DisplayManager.prototype.createLists = function() {
  var _this = this;
  $.each(this.ulElements, function() {
    var newUnorderedList = new UnorderedList($(this));
    newUnorderedList.init();
    _this.unorderedListArray.push(newUnorderedList);
  });
};

DisplayManager.prototype.init = function() {
  this.createLists();
};