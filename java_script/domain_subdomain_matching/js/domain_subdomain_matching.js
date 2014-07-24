var domain = {};
domain.urlPattern =
  /^(https?:\/\/)?(www.)?([\w\d][\w\.\d-]*\.)?([\w\d-]+\.[\w]+)/ ;
domain.isValid = function(url) {
  return Boolean(url && domain.urlPattern.test(url.trim()));
}
domain.displayDetails = function() {
  var urlDetails;
  if(RegExp.$3) {
    urlDetails = 'Domain: ' + RegExp.$4 + '\nSubdomain: ' +
      RegExp.$3.substring(0, RegExp.$3.length - 1);
  } else {
    urlDetails = 'Domain: '+ RegExp.$4 ;
  }
  alert(urlDetails);
}
domain.getDetails = function() {
  var url = document.getElementById('url').value,
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
