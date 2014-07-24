function Window(url) {
  this.url = url;
}
Window.prototype.urlPattern =
/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)\/?$/i ;
Window.prototype.isValid = function(url) {
  return Boolean(url && this.urlPattern.test(url.trim()));
}
Window.prototype.tryOpen = function(url) {
  if(this.isValid(url)) {
    open(url, '_blank', 'width=400px, height=450px,' +
      'menubar=no, scrollbars=no, status=no, title=no');
  } else {
    alert('input a valid URL');
  }
}
window.onload = function() {
  var url = prompt('input required URL');
  var windowObject = new Window(url);
  windowObject.tryOpen(url);
}
