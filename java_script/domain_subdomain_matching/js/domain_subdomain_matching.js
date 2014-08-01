var Domain = {};
Domain.urlPattern = /^(https?:\/\/)?([\w\d][\w\.\d-_]*\.)?([\w\d-]+)\.((\w\w\w)|(\w\w\.\w\w))(\/[\w\d-_\.]+)*\/?((\?([\w\d_]+=[\w\d_\+]*)(&[\w\d_]+=[\w\d_\+]*)*)?(#.*)?)|((#.*)?(\?([\w\d_]+=[\w\d_\+]*)(&[\w\d_]+=[\w\d_\+]*)*)?)$/i ;

Domain.isValid = function(url) {
  return Boolean(url && Domain.urlPattern.test(url.trim()));
}

Domain.displayDetails = function() {
  var urlDetails;
  if(RegExp.$2) {
    urlDetails = 'Domain: ' + RegExp.$3 + '.' + RegExp.$4 + '\nSubDomain: ' +
      RegExp.$2.substring(0, RegExp.$2.length - 1);
  } else {
    urlDetails = 'Domain: ' + RegExp.$3 + '.' + RegExp.$4 ;
  }
  alert(urlDetails);
}

Domain.getDetails = function() {
  var url = document.getElementById('url').value;
  if(Domain.isValid(url)) {
    Domain.displayDetails();
  } else {
    alert('invalid input URL');
  }
}

Domain.bindEvents = function() {
  document.forms[0].addEventListener('submit', function(event) {
    event.preventDefault();
    Domain.getDetails();
  });
}

window.onload = function() {
  Domain.bindEvents();
}
