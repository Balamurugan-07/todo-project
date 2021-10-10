import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todoList: string[] = [];
  todoListDone: string[] = [];
  status = false;
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.todoList = this.appService.getTodoList();
    this.todoListDone = this.appService.getTodoListDone();
  }
  removeTodo(i: number): void {
    this.appService.removeTodo(i);
  }
  removeTodoDone(i: number): void {
    this.appService.removeTodoDone(i);
  }
  moveToTodo(i: number) {
    this.appService.moveToTodo(i);
  }
  moveToDone(i: number) {
    this.appService.moveToDone(i);
  }
}
