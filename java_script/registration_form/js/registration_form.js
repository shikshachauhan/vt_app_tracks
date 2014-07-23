var registrationForm = {};
registrationForm.checkEmpty = function() {
  fields = document.getElementsByClassName('column_right');
  for(var i = 0; i < fields.length; i++) {
    if(!fields[i].value) {
      alert(document.getElementsByClassName(fields[i].id)[0].innerText +
        ' can not be empty.');
    }
  }
}
registrationForm.confirmNotification = function() {
  if(!document.getElementById('confirm').checked) {
    alert('you must confirm to receival of notifications');
  }
}
registrationForm.checkTextArea = function() {
  var aboutMe = document.getElementById('aboutme').value;
  if(!aboutMe) {
    alert('you must tell something about you');
  } else if (aboutMe.length < 50) {
    alert('about me field should have more than 50 characters');
  }
}
registrationForm.bindEvents = function() {
  document.forms['registration_form'].addEventListener('submit',
    registrationForm.checkEmpty, false);
  document.forms['registration_form'].addEventListener('submit',
    registrationForm.checkTextArea, false);
  document.forms['registration_form'].addEventListener('submit',
    registrationForm.confirmNotification, false);
}
window.onload = function() {
  registrationForm.bindEvents();
}