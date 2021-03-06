

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/cameronkoster/todos/',
	timeout: 3000
});

let todoList = [];
let addedTodo = {};


export default class TodoService {

	getTodos(drawCallback) {
		todoApi.get('')
			.then(res => {
				todoList = res.data.data
				drawCallback(todoList)
			})
	}

	addTodo(todoFromForm, callback) {
		todoApi.post('', todoFromForm)
			.then(res => {
				callback()
			})
	}



	toggleTodoStatus(todoId) {
		//STEP 1: Find the todo by its index **HINT** todoList
		let todo = todoList.find(todo => todo._id === todoId) ///MODIFY THIS LINE
		todo.completed = !todo.completed
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()
			})
		//DO YOU WANT TO DO ANYTHING WITH THIS?
	}

	removeTodo(todoId, getTodos) {
		console.log(todoId)
		todoApi.delete(todoId)
			.then(res => {
				getTodos()
			})
	}
}


