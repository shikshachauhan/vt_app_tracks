var domain = {};
domain.urlPattern = /^(https?:\/\/)?([\w\d][\w\.\d-_]*\.)?([\w\d-]+\.[\w]+)(\/[\w\d-_\.]+)*\/?((\?([\w\d_]+=[\w\d_\+]*)(&[\w\d_]+=[\w\d_\+]*)*)?(#.*)?)|((#.*)?(\?([\w\d_]+=[\w\d_\+]*)(&[\w\d_]+=[\w\d_\+]*)*)?)$/i ;

domain.isValid = function(url) {
  return Boolean(url && domain.urlPattern.test(url.trim()));
}
domain.displayDetails = function() {
  var urlDetails;
  if(RegExp.$2) {
    urlDetails = 'Domain: ' + RegExp.$3 + '\nSubdomain: ' +
      RegExp.$2.substring(0, RegExp.$2.length - 1);
  } else {
    urlDetails = 'Domain: ' + RegExp.$3 ;
  }
  alert(urlDetails);
}
domain.getDetails = function() {
  var url = document.getElementById('url').value;
  if(domain.isValid(url)) {
    domain.displayDetails();
  } else {
    alert('invalid input URL');
  }
}
domain.bindEvents = function() {
  document.forms[0].addEventListener('submit', function(event){
    event.preventDefault();
    domain.getDetails();
  });
}
window.onload = function() {
  domain.bindEvents();
}
