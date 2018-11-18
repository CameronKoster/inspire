const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/cameronkoster/todos/',
	timeout: 3000
});



let todoList = []

let addedTodo = {};

export default class TodoService {
	getTodos(drawCallback) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res => {
				todoList = res.data.data
				drawCallback(todoList)
			}))
	}

	//POST
	addTodo(todo, callb) {
		todoApi.post('', todo)
			.then(res => { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				callb()
			})
	}





	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo() {
		// Umm this one is on you to write.... The method is a DELETE

	}

}
