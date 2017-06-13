import { Component, OnInit } from '@angular/core';
import { TaskService} from "../service/task.service";
import { TaskModelInsert} from "../model/task-model-insert";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'task-add',
  templateUrl: "./task-add.component.html",
  providers: [TaskService]
})

export class TaskAddComponent {
  errorMessage: string;
  public task: TaskModelInsert;
  mode = 'Observable';
  public titulo: string;

  constructor(
    private _taskService: TaskService,
    private _route: ActivatedRoute,
    private _router: Router
    ){
  	this.titulo = "Add Task"
    this.task = new TaskModelInsert('','','','');
  }

  onSubmit(){
    console.log("Componente addTask");
    this._taskService.addTask(this.task).subscribe(
        response => {
        if(response.code == 200){
          this._router.navigate(['/home']);
        }else{
          console.log(response);
        }
        },
        error => {
          console.log(<any>error);
        }
      );
  }

}
