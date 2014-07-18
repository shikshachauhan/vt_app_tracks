function User(name, age) {
  this.name = name;
  if(this.isValidAge(age)) {
    this.age = age;
  }
}
User.prototype.agePattern = /^(([1-9]\d?)|(1[0-1]\d))$/;
User.prototype.isValidAge = function(age) {
  return this.agePattern.test(age);
}
User.prototype.comparisonOutput = function(name, cmpString) {
  return this.name + cmpString + name;
}
User.prototype.compare = function(user) {
  if(this.age && user.age) {
    if(this.age > user.age) {
      return this.comparisonOutput(user.name, ' is older than ');
    }
    else if(this.age < user.age) {
      return this.comparisonOutput(user.name, ' is younger than ');
    }
    else {
      return this.comparisonOutput(user.name, ' has same age as ');
    }
  }
  else{
    return 'Either user has an infeasible age';
  }
}
window.onload = function() {
  var user1 = new User('Shiksha', 12);
  var user2 = new User('Sakshi', 22);
  document.getElementById('user_compare').innerHTML = user1.compare(user2);
}
