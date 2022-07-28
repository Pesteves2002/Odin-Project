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

  getDescription() {
    return (
      this.title +
      "\n\n" +
      this.description +
      "\n\n" +
      this.dueDate +
      "\n\n" +
      this.priority
    );
  }
}
