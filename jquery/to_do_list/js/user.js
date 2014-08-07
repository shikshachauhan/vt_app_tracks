function User(name, listElement) {
  this.name = name;
  this.todoList = [];
  this.listElement = listElement;
}

User.prototype.display = function() {
  return this.name + '(' + this.activeTodoCount() + ')';
};

User.prototype.activeTodo = function() {
  var activeTodo = [];
  $.each(this.todoList, function() {
      if(!this.complete) {
        activeTodo.push(this);
      }
    }
  );
  return activeTodo;
}

User.prototype.activeTodoCount = function() {
  return this.activeTodo().length;
}