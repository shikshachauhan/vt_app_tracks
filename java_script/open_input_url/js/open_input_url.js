function Window(url) {
  this.url = url;
}
Window.prototype.urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)\/?((\?([\w\d_]+=[\w\d_\+]+)(&[\w\d_]+=[\w\d_\+]+)*)?(#[\w\d_]+)?)|((#[\w\d_]+)?(\?([\w\d_]+=[\w\d_\+]+)(&[\w\d_]+=[\w\d_\+]+)*)?)$/i ;

Window.prototype.isValid = function() {
  return Boolean(this.url && this.urlPattern.test(this.url.trim()));
}

Window.prototype.tryOpen = function() {
  if(this.isValid()) {
    open(this.url, '_blank', 'width=400px, height=450px,' +
      'menubar=no, scrollbars=no, status=no, title=no');
  } else {
    alert('input a valid URL');
  }
}

window.onload = function() {
  var url = prompt('input required URL');
  if(url) {
    var windowObject = new Window(url);
    windowObject.tryOpen();
  }
}
