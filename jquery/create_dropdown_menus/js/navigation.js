/*Hovering over an item in the main menu should 
*show that item's submenu items, if any.
*Exiting an item should hide any submenu items.*/

function DropdownMenu(elements) {
  this.listElements = elements.listElements;
}

DropdownMenu.prototype.showSubMenu = function() {
  $(this)
    .find('ul')
      .css('display', 'block');
}

DropdownMenu.prototype.hideSubMenu = function() {
  $(this)
    .find('ul')
      .css('display', 'none');
}

DropdownMenu.prototype.init = function() {
  this.listElements.hover(this.showSubMenu, this.hideSubMenu);
}

$(function() {
  var menuElements = {
    listElements: $('#nav li')
  };
  dropdownMenu = new DropdownMenu(menuElements);
  dropdownMenu.init();
});
