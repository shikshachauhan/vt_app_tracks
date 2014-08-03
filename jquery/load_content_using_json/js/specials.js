function DisplayDayInfo(htmlElements) {
  // the particular day is retrieved from this form
  this.form = htmlElements.form;
  //this is where day related data is filled
  this.targetDivision = $('<div>');
}

DisplayDayInfo.prototype.getDayInfo = function(event) {
  var _this = this;
  $.getJSON('data/specials.json', {
    cache: true,
    dataType: 'json',
  }, function(data) {
    _this.displayDayInfo(data[$(event.target).val()]);
  });
};

DisplayDayInfo.prototype.displayDayInfo = function(info) {
  this.targetDivision.html(function() {
    var temp = '';
    $.each(info, function(key, val) {
      temp += '<div>' + key + ' : ' + val + '</div>';
    });
    return temp;
  });
};

DisplayDayInfo.prototype.bindEvents = function() {
  var _this = this;
  this.form.find('select').on('change', function(event) {
    _this.getDayInfo(event);
  })
};

DisplayDayInfo.prototype.init = function() {

  // Append a target div after the form that's inside the #specials element
  this.form.after(this.targetDivision);

  // Bind to the change event of the select element; when the user changes the selection,
  // send an Ajax request to /exercises/data/specials.json.
  this.bindEvents();

  //remove the submit button from the form
  this.form.find('input[type="submit"]').parents('li').remove();
};

$(function() {
  var specialElements = {
    form: $('#specials form')
  };
  displayDayInfo = new DisplayDayInfo(specialElements);
  displayDayInfo.init();
});
