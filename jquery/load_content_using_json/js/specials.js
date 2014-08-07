function RemoteJson(form) {
  // the particular RemoteJson is retrieved from this form
  this.form = form;
  //this is where RemoteJson related data is filled
  this.targetDivision = $('<div>');
}

RemoteJson.prototype.load = function() {
  var _this = this;
  $.getJSON('data/specials.json', {
    cache: true,
    dataType: 'json',
  }, function(responseText) {
    _this.json = responseText;
  });
};

RemoteJson.prototype.displayJsonHtml = function(selectedElement) {
  var remoteJsonHtml = this.json[selectedElement.value];

  this.targetDivision.css('color', remoteJsonHtml['color'])
    .html('<strong>' + remoteJsonHtml['title'] + '</strong><br/>' +
      '<img src=' + remoteJsonHtml['image'] + '>' + '<p>' + remoteJsonHtml['text'] + '</p>'
    );
};

RemoteJson.prototype.bindEvents = function() {
  var _this = this;
  _this.form.find('select').on('change', function() {
    _this.displayJsonHtml(this);
  });
};

RemoteJson.prototype.appendTargetDivision = function() {
  this.form.after(this.targetDivision);
};

RemoteJson.prototype.init = function() {

  // Append a target div after the form that's inside the #specials element
  this.appendTargetDivision();
  this.load();

  // Bind to the change event of the select element; when the user changes the selection,
  // send an Ajax request to /exercises/data/specials.json.
  this.bindEvents();

  //remove the submit button from the form
  this.form.find('input[type="submit"]').parents('li').remove();
};

$(function() {
  var remoteJson = new RemoteJson($('#specials form'));
  remoteJson.init();
});
