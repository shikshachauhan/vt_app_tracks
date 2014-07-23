function Name(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.nameString = 'Hello ' + this.firstName + ' ' + this.lastName ;
}
Name.prototype.writeName = function() {
  document.body.innerHTML = this.nameString;
}
Name.prototype.alertName = function() {
  alert(this.nameString);
}
Name.prototype.isValid = function(firstName, lastName) {
  return firstName && lastName && firstName.trim() && lastName.trim();
}
Name.prototype.notifyName = function() {
  if(this.isValid(this.firstName, this.lastName)) {
    this.alertName();
    this.writeName();
  }
  else {
    alert('Invalid name');
  }
}
window.onload = function() {
  var firstName = prompt("Please enter first your name");
  var lastName = prompt("Please enter last your name");
  user = new Name(firstName, lastName);
  user.notifyName();
}