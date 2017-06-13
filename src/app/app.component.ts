import { Component } from '@angular/core';
import { TaskListComponent }   from './components/task-list.component';
import { TaskAddComponent }     from './components/task-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public titulo:string = 'Task Manager';
}
