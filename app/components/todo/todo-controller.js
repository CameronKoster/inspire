import TodoService from "./todo-service.js";

var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	todoService.getTodos(draw)
} 	//FYI DONT EDIT ME :)






function draw(todoList) {
	let template = ""
	todoList.forEach(todo => {
		template += `
		<div>
		<input onchange="app.controllers.todoController.toggleTodoStatus()" type="checkbox" class="todoListStyling">  //something needs to go in parens
		<span> ${todo.description}</span>
		</div>
		`
	})
	document.getElementById("todos").innerHTML = template
}





export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
	}





	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			completed: false,
			id: form.id,
			description: form.description.value,
			user: form.user,
			v: form.v
		}


		// DONT FORGET TO BUILD YOUR TODO OBJECT



		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO

		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	} //Not working yet. May need to work form.reset() in when all done. 






	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		let template = ""
		template +=
			`
			<div class="todo">
			${todo._id} - ${todo.description}
			<button onclick="removeTodo('${todo._id}')">Remove</button>
			</div>
			`





		// ask the service to run the remove todo with this id

		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}


	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again

}
