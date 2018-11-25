import TodoService from "./todo-service.js";

var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	todoService.getTodos(draw)
} 	//FYI DONT EDIT ME :)

//something needs to go into the parens in the input
function draw(todoList) {
	let template = ""
	todoList.forEach(todo => {
		template += `
		<div>
		<div onchange="app.controllers.todoController.toggleTodoStatus()"  class="todoListStyling"></div>  
		<span class="todosStyling">${todo.description}</span>
		<i class="far fa-times-circle iconStyling" onclick="app.controllers.todoController.removeTodo('${todo._id}')"></i>
		</div>
		`
	})
	document.getElementById("todos").innerHTML = template
}

export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
	}

	//why are we building an object in here? What is the purpose? Why are we using form.? Why are we using an extra drilldown on description?
	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.todo.value,
		}

		todoService.addTodo(todo, getTodos)
	}

	removeTodo(todoId) {
		console.log(todoId)
		todoService.removeTodo(todoId, getTodos)
	}
}
