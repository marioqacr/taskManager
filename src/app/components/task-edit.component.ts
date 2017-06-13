import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaskService} from "../service/task.service";
import { TaskModel} from "../model/task";


@Component({
	selector: 'task-edit',
	templateUrl: "./task-add.component.html",
	providers: [TaskService]
})

export class TaskEditComponent {
  errorMessage: string;
  public task: TaskModel;
  mode = 'Observable';
  public titulo: string;

    constructor(
    private _taskService: TaskService,
    private _route: ActivatedRoute,
    private _router: Router
    ){
  	 this.titulo = "Edit Task"
     this.task = new TaskModel(0,'','','','','','');
    }

  ngOnInit(){
  	 this.getTask();
    }

  getTask(){

    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._taskService.getTask(id).subscribe(
        response => {
          if(response.code == 200){
            this.task = response.data;
          } else {
            this._router.navigate(['/taskList']);
          }
        },
          error => {
            console.log(<any>error);
          }
        );
      });
  }


  onSubmit(){
    this.updateTask();
  }

  updateTask(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._taskService.editTask(id, this.task).subscribe(
        response => {
          if(response.code == 200){
            this._router.navigate(['/taskdetail', id]);  
          }else{
            console.log(response);
          }
          
        },
        error => {
          console.log(<any>error)
        }
       );
    });
  }

}