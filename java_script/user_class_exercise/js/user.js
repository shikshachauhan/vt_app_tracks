function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.compare = function(user) {
  return (this.age > user.age) ? this.name + 'is older than' + user.name :
  user.name + ' is older than ' + this.name;
}
var user1 = new User('Shiksha', 12);
var user2 = new User('Sakshi', 22);
document.getElementById('user_compare').innerHTML = user1.compare(user2);
