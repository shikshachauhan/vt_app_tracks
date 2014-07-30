$(function() {
  //Hide all of the modules.
  $('.module').hide();

  //Create an unordered list element before the first module.
  $('.module').first().before($('<ul>', {
    id: 'moduleList'
  }));

  //Iterate over the modules using $.fn.each. For each module,
  // use the text of the h2 element as the text for a list item
  //that you add to the unordered list element.
  $('.module').each(function() {
    $('#moduleList').append(
      $('<li>').text(
          $(this).find('h2').text()
        )
      )
  })

  // Bind a click event to the list item that:
  // 1. Shows the related module, and hides any other modules
  // 2. Adds a class of "current" to the clicked list item
  // 3. Removes the class "current" from the other list item
  $('#moduleList').find('li').on('click', function() {
    $('.module').hide();

    $('.module').eq($(this).index()).show();

    $('#moduleList li').removeClass('current');

    $(this).addClass('current');
  })

  //Finally, show the first tab.
  $('.module').eq(0).show();
  $('#moduleList li').eq(0).addClass('current');
});
