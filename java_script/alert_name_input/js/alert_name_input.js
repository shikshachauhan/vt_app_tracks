function Name(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Name.prototype.getName = function() {
  return 'Hello ' + this.firstName + ' ' + this.lastName ;
}
Name.prototype.writeName = function() {
  document.body.innerText = this.getName();
}
Name.prototype.alertName = function() {
  alert(this.getName());
}
Name.prototype.isValid = function() {
  return this.firstName.trim() && this.lastName.trim();
}
Name.prototype.displayName = function() {
  if(this.isValid()) {
    this.alertName();
    this.writeName();
  }
  else {
    alert('Invalid name');
  }
}
window.onload = function() {
  var firstName = prompt('Please enter your first name');
  if(firstName) {
    var lastName = prompt('Please enter your last name');
    if(lastName) {
      var user = new Name(firstName, lastName);
      user.displayName();
    }
  }
}