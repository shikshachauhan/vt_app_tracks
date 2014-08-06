var UnorderedList = function(unorderedList) {
  this.unorderedList = unorderedList;
  this.listElements = this.unorderedList.find('li');
  this.priorityElements = this.listElements.filter('[data-priority-order]');
  this.notPriorityElements = this.listElements.filter('[data-priority-order]');
  this.initialItemsCount = Number(this.unorderedList.attr('data-initial-items-count'));
  this.seeAllLink = this.unorderedList.find('.see-all');
  this.seeLessLink = this.unorderedList.find('.see-less');
  this.totalListItems = this.listElements.lenght;
  this.totalPriorityElements = this.priorityElements.lenght;
  this.currentlyVisible = this.listElements;
  this.totalNotPriorityElements = this.notPriorityElements.length;
}

UnorderedList.prototype.compare = function(first, second) {
  if(first < second) {
    return -1;
  }
  if(first > second) {
    return 1;
  }
  return 0;
};

UnorderedList.prototype.sortByText = function() {
  var _this = this;
  this.listElements.sort(function(current, next) {
      var currentText = $(current).text();
      var nextText = $(next).text();
      return _this.compare(currentText, nextText);
    }
  );
};

UnorderedList.prototype.displayElements = function(listElements) {
  this.currentlyVisible.hide();
  this.currentlyVisible = listElements;
  this.currentlyVisible.detach()
    .prependTo(this.unorderedList)
    .show();
  this.seeAllLink.toggle();
  this.seeLessLink.toggle();
};

UnorderedList.prototype.sortByPriority = function() {
  var _this = this;
  this.priorityElements.sort(function(current, next) {
      var currentPriority = Number($(current).attr('data-priority-order'));
      var nextPriority = Number($(next).attr('data-priority-order'));
      return _this.compare(currentPriority, nextPriority);
    }
  );
};

UnorderedList.prototype.bindEvents = function() {
  var _this = this;
  _this.seeAllLink.on('click', function(event) {
      event.preventDefault();
      _this.sortByText();
      _this.displayElements(_this.listElements);
    }
  );

  _this.seeLessLink.on('click', function(event) {
      event.preventDefault();
      _this.sortByPriority();
      var mostPriorityElements = _this.priorityElements.slice(0, _this.initialItemsCount);
      _this.displayElements(mostPriorityElements);
    }
  );
};

UnorderedList.prototype.appendElementPriority = function() {
  $.each(this.listElements, function() {
      var $this = $(this);
          priority = $this.attr('data-priority-order');
      if(!priority) {
        priority = '';
      }
      $priorityElement = $('<span>').text('('+priority+')');
      $this.append($priorityElement);
    }
  );
};

UnorderedList.prototype.init = function() {
  this.seeAllLink.hide();
  this.seeLessLink.show();
  this.appendElementPriority();
  this.sortByPriority();
  var mostPriorityElements = this.priorityElements.slice(0, this.initialItemsCount);
  this.displayElements(mostPriorityElements);
  this.bindEvents();
};
