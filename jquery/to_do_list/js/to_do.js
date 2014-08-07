function Todo(task, user) {
  this.task = task;
  this.complete = false;
  this.user = user;
}

Todo.prototype.display = function() {
  return this.task + ' assigned by(' + this.user.name + ')';
}