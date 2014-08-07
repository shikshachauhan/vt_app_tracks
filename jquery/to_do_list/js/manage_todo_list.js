function ManageToDoList(htmlElements) {
  this.todoForm = htmlElements.todoForm;
  this.userForm = htmlElements.userForm;
  this.createTodoButton = htmlElements.createTodoButton;
  this.createUserButton = htmlElements.createUserButton;
  this.userListElement = htmlElements.userList;
  this.todoListElement = htmlElements.todoList;
  this.task = htmlElements.task;
  this.name = htmlElements.name;
  this.userSelect = htmlElements.userSelect;
  this.userList = [];
  this.todoList = [];
  this.userNameList = [];
}

ManageToDoList.prototype.isValid = function(text) {
  if(text == '' || this.userNameList.indexOf(text) != -1) {
    return false;
  }
  this.userNameList.push(text);
  return true;
};

ManageToDoList.prototype.addToUserSelect = function(user) {
  var selectOption = $('<option>');
  selectOption.text(user.name).data('user', user);
  this.userSelect.append(selectOption);
};

ManageToDoList.prototype.addToUserList = function(user, listItem) {
  listItem.text(user.display());
  this.userListElement.append(listItem);
};

ManageToDoList.prototype.addUser = function(event) {
  event.preventDefault();
  this.userForm.hide();

  var name = this.name.val().trim();
  if(this.isValid(name)) {
    this.createTodoButton.show();
    var listItem = $('<li>'),
        user = new User(name, listItem);
        

    this.addToUserSelect(user);
    this.addToUserList(user, listItem);
  
    //store user instance
    this.userList.push(user);
  }
};

ManageToDoList.prototype.addCheckBox = function(newTodo, selectedUser) {
  var newTodoCheckBox = $('<input>', {
      type: 'checkbox'
    }),
      newLabel = $('<label>');

  newLabel.text(newTodo.display());
  newTodoCheckBox.data('label', newLabel)
      .data('user', selectedUser)
      .data('todo', newTodo);

  this.todoListElement.append($('<br/>'), newTodoCheckBox, newLabel);
};

ManageToDoList.prototype.updateUserInfo = function(selectedUser, newTodo) {
  selectedUser.todoList.push(newTodo);
  selectedUser.listElement.text(selectedUser.display());
};

ManageToDoList.prototype.addTodo = function(event) {
  event.preventDefault();
  this.todoForm.hide();

  var taskString = this.task.val().trim();
  if(taskString != '') {
    var selectedOption = this.userSelect.find('option:selected'),
        selectedUser = selectedOption.data('user'),
        newTodo = new Todo(taskString, selectedUser);
  
    this.addCheckBox(newTodo, selectedUser);
    this.updateUserInfo(selectedUser, newTodo);

    //store instance of new Todo
    this.todoList.push(newTodo);
  }
};

ManageToDoList.prototype.completeTask = function(event) {
  var $target = $(event.target),
      user = $target.data('user');
  if($target.prop('checked')) {
    $target.data('label').wrap('<strike>');
    $target.data('todo').complete = true;
  } else {
    $target.data('todo').complete = false;
  }
  user.listElement.text(user.display());
};

ManageToDoList.prototype.bindUserFormEvents = function() {
  var _this = this;
  _this.createUserButton.on('click', function() {
    _this.userForm.show();
  });
  _this.userForm.on('submit', function(event) {
    _this.addUser(event);
    _this.name.val('');
  });
};

ManageToDoList.prototype.bindTodoFormEvents = function() {
  var _this = this;
  _this.createTodoButton.on('click', function() {
    _this.todoForm.show();
  });
  _this.todoForm.on('submit', function(event) {
    _this.addTodo(event);
    _this.task.val('');
  });
};

ManageToDoList.prototype.bindEvents = function() {
  var _this = this;
  this.bindUserFormEvents();
  this.bindTodoFormEvents();
  this.todoListElement.on('change', function(event) {
    _this.completeTask(event);
  });
};

ManageToDoList.prototype.init = function() {
  //hide Elements
  this.todoForm.hide();
  this.userForm.hide();
  this.createTodoButton.hide();
  this.bindEvents();
};
