import { Component, OnInit } from '@angular/core';
import { TaskService} from "../service/task.service";
import { TaskModel} from "../model/task";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'tasks-detail',
  templateUrl: "./task-detail.component.html",
  providers: [TaskService]
})

export class TaskDetailComponent {
  errorMessage: string;
  public task: TaskModel[];
  mode = 'Observable';
  public titulo: string;

  constructor (
  	private _taskService: TaskService,
  	private _route: ActivatedRoute,
  	private _router: Router 
  ) {
  	this.titulo= "Detail of Task";

  }

  ngOnInit(){
  	console.log("Page Detail of Task loaded.");
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
}

