function ManageToDoList(htmlElements) {
  this.todoForm = htmlElements.todoForm;
  this.userForm = htmlElements.userForm;
  this.createTodoButton = htmlElements.createTodoButton;
  this.createUserButton = htmlElements.createUserButton;
  this.userList = htmlElements.userList;
  this.todoList = htmlElements.todoList;
  this.task = htmlElements.task;
  this.userSelect = htmlElements.userSelect;
  this.name = htmlElements.name;
}

ManageToDoList.prototype.addUser = function(event) {
  event.preventDefault();
  this.userForm.hide();

  var newUser = new User(this.name.val()),
      newListItem = $('<li>'),
      newSelectOption = $('<option>');

  newListItem.text(newUser.to_s());
  newSelectOption.text(newUser.name)
    .data('list', newListItem)
    .data('user', newUser);

  this.userList.append(newListItem);
  this.userSelect.append(newSelectOption);
};

ManageToDoList.prototype.addTodo = function(event) {
  event.preventDefault();
  this.todoForm.hide();

  var taskString = this.task.val(),
      newTodo = new ToDo(taskString),
      newTodoCheckBox = $('<input>', {
        type: 'checkbox'
      }),
      selectedOption = this.userSelect.find('option:selected'),
      selectedUser = selectedOption.data('user'),
      newLabel = $('<label>');
  newLabel.text(taskString + ' assigned by(' + selectedUser.name + ')')

  selectedUser.todoCount++;
  selectedOption
    .data('list')
      .text(selectedUser.to_s());

  newTodoCheckBox.data('label', newLabel)
    .data('user-text', selectedOption.data('list'))
    .data('user', selectedUser);
  this.todoList.append($('<br/>'), newTodoCheckBox, newLabel);
};

ManageToDoList.prototype.deleteTask = function() {
  var $target = $(event.target),
      user = $target.data('user');
  if(event.target.checked == true) {
    $target
      .data('label')
        .wrap('<strike>');
    user.todoCount--;
  } else {
    user.todoCount++;
  }
  $target
    .data('user-text')
      .text($target.data('user').to_s());
};

ManageToDoList.prototype.bindEvents = function() {
  var _this = this;
  this.createUserButton.on('click', function() {
    _this.userForm.show();
  });
  this.userForm.on('submit', function(event) {
    _this.addUser(event);
    _this.createTodoButton.show();
    _this.name.val('');
  });
  this.createTodoButton.on('click', function() {
    _this.todoForm.show();
  });
  this.todoForm.on('submit', function() {
    _this.addTodo(event);
    _this.task.val('');
  });
  this.todoList.on('change', function(event) {
    _this.deleteTask(event);
  });
};
ManageToDoList.prototype.init = function() {
  //hide Elements
  this.todoForm.hide();
  this.userForm.hide();
  this.createTodoButton.hide();

  this.bindEvents();
};
