export class todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }
}