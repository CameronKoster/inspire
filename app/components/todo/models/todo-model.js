export default class Todo {
  constructor(data) {
    this.description = data.description
    this.completed = data.completed
    this.user = data.user
  }
}