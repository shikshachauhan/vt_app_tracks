// Priority Sort (Part- 1) (Level 2)
// The html contains various Unordered lists.
// For the lists (ULs) with class 'priority-sort',
// the following conditions should be satisfied-
// This list (UL) should have a data attribute 
// 'initial-items-count' whose value is a number.
// a few list items in this list have a data attribute 
// 'priority-order'. The value of this attribute is 1, 2, 3 etc. eg ,
// Initially, the number of list items displayed on 
// the page should be equal to the value of 'initial-items-count'.
// Also, the displayed list items should be sorted by the value of data attribute 'priority-order'.
// There should be a 'See all' link after the displayed items.
// On clicking the 'See All' link, I should be able 
// to see all the list items. Also, the list items should now be sorted alphabetically.
// There should be a 'See Less' link when all the list 
// items are displayed. On clicking this link, 
// I should see the list items equal to the value of 
// 'initial-items-count' and sorted by priority order.

$(function() {
  var displayManager = new DisplayManager($('.priority-sort'));
  displayManager.init();
});