function RegistrationForm(form, confirm, aboutMe, textFields, email, homepage) {
  this.form = form;
  this.confirm = confirm;
  this.aboutMe = aboutMe;
  this.textFields = textFields;
  this.email = email;
  this.homepage = homepage;
};
RegistrationForm.prototype.checkEmpty = function(event) {
  event.preventDefault();
  for(var i in this.textFields) {
    if(!this.textFields[i].value) {
      alert(document.getElementsByClassName
        (this.textFields[i].dataset.reference)[0].innerText + ' can not be empty.');
    }
  }
}
RegistrationForm.prototype.confirmNotification = function() {
  if(!this.confirm.checked) {
    alert('you must confirm to receival of notifications');
  }
}
RegistrationForm.prototype.checkTextArea = function() {
  if(!this.aboutMe.value) {
    alert('you must tell something about you');
  } else if (this.aboutMe.length < 50) {
    alert('about me field should have more than 50 characters');
  }
}
RegistrationForm.prototype.bindEvents = function() {
  var register = this;
  register.form.addEventListener('submit', function(event) {
    register.checkEmpty(event);
  });
  register.form.addEventListener('submit', function() {
    register.checkTextArea();
  });
  register.form.addEventListener('submit', function() {
    register.confirmNotification();
  });
}
window.onload = function() {
  var form = document.forms['registration_form'],
      confirm = document.getElementById('confirm'),
      aboutMe = document.getElementById('aboutme'),
      textFields = document.getElementsByClassName('text_fields'),
      email = document.getElementById('email'),
      homepage = document.getElementById('homepage'),
      register = new RegistrationForm
        (form, confirm, aboutMe, textFields, email, homepage);
  register.bindEvents();
}