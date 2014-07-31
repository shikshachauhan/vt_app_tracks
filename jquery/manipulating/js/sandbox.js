$(function() {

  //Add five new list items to the end of the unordered list #myList.
    $('#myList').append(function() {
      var temp = '';
      for(var i = 1; i < 6; i++) {
        temp += '<li>New List Item ' + i + ' </li>' ;
      }
      return temp;
    });

  //Remove the odd list items
  $('#myList li:odd').remove();

  //Add another h2 and another paragraph to the last div.module
  $('div.module')
    .last()
      .prepend('<h2>Here is something sepecial for you</h2>',
        '<p>Now you can choose the day of the week.</p>');

  // Add another option to the select element; give the option the value "Wednesday"
  $('<option>', {
    html: 'Wednesday',
    value: 'Wednesday'
  }).appendTo('select[name="day"]');

  //Add a new div.module to the page after the last one;
  //put a copy of one of the existing images inside of it.
  $('div.module').last().after($('<div>', { 
    html: $("img").eq(0).clone(),
    class: 'module'
  }));
});
