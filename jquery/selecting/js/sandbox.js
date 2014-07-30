$(function() {

  //Select all of the div elements that have a class of "module".

  $('div.module')
    .css('background-color', 'pink');

  //Come up with three selectors that you could use to get the third item in the 
  //#myList unordered list. Which is the best to use? Why?
  //first
  $('#myList li')
    .eq(2)
      .css('background-color', 'yellow');
  //second
  $('#listItem_2')
    .next()
      .css('background-color', 'blue');
  //third(The best)
  // this is the best because it is DOM independent and the fastest.
  $('#myListItem')
    .css('background-color', 'orange');

  //Select the label for the search input using an attribute selector.
  $('#search label[for="q"]')
    .css('background-color', 'yellow');

  //Figure out how many elements on the page are hidden
  var hiddenCount = $(':hidden').length;
  alert('There are ' + hiddenCount + ' hidden eleemnts on this page');

  //Figure out how many image elements on the page have an alt attribute.
  var imgAltCount = $('img[alt]').length;
  alert('There are ' + imgAltCount + ' image elements with alt attribute');

  //Select all of the odd table rows in the table body.
  $("tr:odd")
    .css('background-color', 'red');
});