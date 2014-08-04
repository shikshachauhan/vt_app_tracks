/*In this application we'll to maintain user and their todos.
*There will be two forms, one for creating users and other for creating todo & assigning them to users.
*
*There will be two buttons 'Create User' and 'Create Todo',
*they will display respective forms.
*
*User Form: It takes User's Name as input and display it in the User's column with it's
*initial remaining To-Do count as 0. Name should not be blank and should be unique.
*
*To-Do Form: It takes todo as input with the assignee name from a select box which
*contains names of already existing user. Todo form will be displayed only
*if there is atleast one user. It will alert an error message if
*somebody clicks on 'create todo' button and no user exists.
*Once a task/todo is added, increment the count of remaining todos of\
*the respective user who has assigned this task.
*
*Todo is displayed in the todo column with a check-box.
*
*When this checkbox is checked then strike-through
*the todo which means that todo is done and the remaining todo count
is decremented by 1 of the user. And if it unchecked increment the count by 1 again.*/

$(function() {
  var htmlElements = {
    todoForm: $('#to-do-form'),
    userForm: $('#create-user-form'),
    createTodoButton: $('#create-to-do'),
    createUserButton: $('#create-user'),
    userList: $('#user-list'),
    todoList: $('#to-do-list'),
    task: $('#task'),
    userSelect: $('#users'),
    name: $('#name')
  }
  var manageToDoList = new ManageToDoList(htmlElements);
  manageToDoList.init();
});