function Window(url) {
  this.url = url;
}
Window.prototype.isValid = function(url) {
  return url && url.trim();
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
