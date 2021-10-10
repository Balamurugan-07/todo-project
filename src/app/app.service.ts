export class AppService {
  private todoList = ['brush your teeth', 'make breakfast'];
  private todoListDone = ['Bath', 'Oil Pulling'];
  getTodoList() {
    return this.todoList;
  }
  addTodo(data: string): void {
    this.todoList.push(data);
  }
  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }
  moveToDone(i: number) {
    this.todoListDone.push(this.todoList.splice(i, 1)[0]);
  }
  // --------------------------------------
  getTodoListDone() {
    return this.todoListDone;
  }
  addTodoDone(data: string): void {
    this.todoListDone.push(data);
  }
  removeTodoDone(index: number) {
    this.todoListDone.splice(index, 1);
  }
  moveToTodo(i: number) {
    this.todoList.push(this.todoListDone.splice(i, 1)[0]);
  }
}
