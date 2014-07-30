$(function() {

  //Set the value of the search input to the text of the label element
  var labelText = $('[for="q"]').text();
  $('[name="q"]')
    .val(labelText);

  //Add a class of "hint" to the search input
  $('[name="q"]')
    .addClass('hint');

  //Remove the label element
  $('[for="q"]')
    .remove();

  //Bind a focus event to the search input that removes the hint text and the "hint" class
  $('[name="q"]').on('focus', function() {
    $(this)
      .val('')
      .removeClass('hint');
  })

  //Bind a blur event to the search input that restores the hint text and "hint" class
  //if no search text was entered
  $('[name="q"]').on('blur', function() {
    $(this)
      .val(labelText)
      .addClass('hint');
  })
});
