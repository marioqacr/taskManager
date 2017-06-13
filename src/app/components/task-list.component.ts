import { Component, OnInit } from '@angular/core';
import {TaskService} from "../service/task.service";
import {TaskModel} from "../model/task";

@Component({
  selector: 'tasks-list',
  templateUrl: "./task-list.component.html",
  providers: [TaskService]
})

export class TaskListComponent {
  errorMessage: string;
  public tasks: TaskModel[];
  mode = 'Observable';
  public titulo: string;

  constructor (private _taskService: TaskService) {
    this.titulo = "Tasks List"
  }
  
  ngOnInit() { 
               this.getTasks();
              }
  
  getTasks() {
    this._taskService.getTasks().subscribe(
                      result=> {
                        this.tasks=result.data;
                      
                      if(!this.tasks){
                            console.log("Error en el servidor")
                          }
                        },
                       error =>  this.errorMessage = <any>error);
        }

  onDeleteTask(id){
    this._taskService.deleteTask(id).subscribe(
        response => {
          if(response.code == 200){
            this.getTasks();
          }else{
              alert("Error deleting product ");
          }
        },
        error => {
          console.log(<any>error);
        }
      );
  }

  public confirm;

  deleteConfirm(id){
    this.confirm = id;
  }

  deleteCancelled(){
    this.confirm = null;
  }
}  