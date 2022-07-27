export class project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  addTodo(todo) {
    this.list.push(todo);
  }

  getNumOfTodos() {
    return this.list.length;
  }

  getDescription() {
    return this.name + "\n\n" + this.getNumOfTodos();
  }
}
