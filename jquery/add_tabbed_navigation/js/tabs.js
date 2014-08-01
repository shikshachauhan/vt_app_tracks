function TabbedNavigation(modules) {
  this.modules = modules;
}

TabbedNavigation.prototype.hideAll = function() {
  this.modules.hide();
}

TabbedNavigation.prototype.createUnorderedList = function() {
  this.moduleList = $('<ul>');
  this.modules.first().before(this.moduleList);
}

TabbedNavigation.prototype.createListItems = function() {
  var _this = this;
  this.modules.each(function(index) {
    _this.moduleList.append(
      $('<li>').text(
        $(this).find('h2').text()
      )
    );
  });
  this.listElements = this.moduleList.find('li');
}

TabbedNavigation.prototype.showClickedTab = function(event) {
  var $target = $(event.target);
  this.modules
    .hide()
    .filter(function() {
      return ($(this).find('h2').text() == $target.text())
    }).show();

  this.listElements
    .removeClass('current');

  $target.addClass('current');
}

TabbedNavigation.prototype.bindEvents = function() {
  var _this = this;
  this.listElements.on('click', function(event) {
    _this.showClickedTab(event);
  });
}
TabbedNavigation.prototype.showFirstTab = function() {
  this.modules.first().show();
  this.listElements.first().addClass('current');
}
$(function() {
  tabbedNavigation = new TabbedNavigation($('.module'));

  //Hide all of the moduless.
  tabbedNavigation.hideAll();

  //Create an unordered list element before the first module.
  tabbedNavigation.createUnorderedList();

  //Iterate over the modules using $.fn.each. For each module,
  // use the text of the h2 element as the text for a list item
  //that you add to the unordered list element.
  tabbedNavigation.createListItems();
  // Bind a click event to the list item that:
  // 1. Shows the related module, and hides any other modules
  // 2. Adds a class of "current" to the clicked list item
  // 3. Removes the class "current" from the other list item
  tabbedNavigation.bindEvents();

  //Finally, show the first tab.
  tabbedNavigation.showFirstTab();
});
