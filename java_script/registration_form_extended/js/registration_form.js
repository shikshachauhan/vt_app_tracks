function RegistrationForm(form, confirm, aboutMe) {
  this.form = form;
  this.confirm = confirm;
  this.aboutMe = aboutMe;
};
RegistrationForm.prototype.emailPattern =
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ;
RegistrationForm.prototype.urlPattern =
/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i ;
RegistrationForm.prototype.checkEmpty = function(event) {
  event.preventDefault();
  fields = document.getElementsByClassName('column_right');
  for(var i = 0; i < fields.length; i++) {
    if(!fields[i].value) {
      alert(document.getElementsByClassName(fields[i].id)[0].innerText +
        ' can not be empty.');
    }
  }
}
RegistrationForm.prototype.confirmNotification = function() {
  if(!this.confirm.checked) {
    alert('you must confirm to receival of notifications');
  }
}
RegistrationForm.prototype.checkTextArea = function() {
  if(!this.aboutMe) {
    alert('you must tell something about you');
  } else if (this.aboutMe.length < 50) {
    alert('about me field should have more than 50 characters');
  }
}
RegistrationForm.prototype.isEmailValid = function() {
  var email = document.getElementById('email');
  if(email.value && !RegistrationForm
    .prototype.emailPattern.test(email.value)) {
    alert('Please Enter a  valid email id');
  }
}
RegistrationForm.prototype.isUrlValid = function() {
  var homepage = document.getElementById('homepage');
  if(homepage.value && !RegistrationForm
    .prototype.urlPattern.test(homepage.value)) {
    alert('Please Enter a  valid url for homepage');
  }
}
RegistrationForm.prototype.bindEvents = function() {
  var register = this;
  this.form.addEventListener('submit', function(event) {
    register.checkEmpty(event);
    }, false);
  this.form.addEventListener('submit', this.checkTextArea, false);
  this.form.addEventListener('submit', this.confirmNotification, false);
  this.form.addEventListener('submit', this.isEmailValid, false);
  this.form.addEventListener('submit', this.isUrlValid, false);
}
window.onload = function() {
  var form = document.forms['registration_form'];
  var confirm = document.getElementById('confirm');
  var aboutMe = document.getElementById('aboutme');
  var register = new RegistrationForm(form, confirm, aboutMe);
  register.bindEvents();
}