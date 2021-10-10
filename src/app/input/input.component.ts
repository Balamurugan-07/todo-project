import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  input: string = '';
  constructor(private appService: AppService) {}

  ngOnInit(): void {}
  addTodo() {
    this.appService.addTodo(this.input);
    this.input = '';
  }
}
