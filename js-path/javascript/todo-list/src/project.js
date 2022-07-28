export class project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  addToDo(todo) {
    this.list.push(todo);
  }

  getToDoList() {
    return this.list;
  }

  getNumOfTodos() {
    return this.list.length;
  }

  getDescription() {
    return this.name + "\n\n" + this.getNumOfTodos();
  }
}
