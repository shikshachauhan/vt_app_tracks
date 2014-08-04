function User(name) {
  this.name = name;
  this.todoCount = 0;
}
User.prototype.to_s = function() {
  return this.name + '(' + this.todoCount + ')';
};