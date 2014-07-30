$(function() {

  //Add five new list items to the end of the unordered list #myList.
  for(var i = 0; i < 5; i++) {
    $('#myList').append('<li>New List Item ' + (i + 1) + '</li>')
  }

  //Remove the odd list items
  $('#myList li:odd').remove();

  //Add another h2 and another paragraph to the last div.module
  $('div.module')
    .last()
      .prepend('<p>Now you can choose the day of the week.</p>')
      .prepend('<h2>Here is something sepecial for you</h2>');

  // Add another option to the select element; give the option the value "Wednesday"
  $('<option>', {
    html: 'Wednesday',
    value: 'Wednesday'
  }).appendTo('[name="day"]');

  //Add a new div.module to the page after the last one;
  //put a copy of one of the existing images inside of it.
  $('div.module').last().after($('<div>', { html: $("img").eq(0).clone() }));
});
