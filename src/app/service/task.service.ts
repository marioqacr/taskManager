import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { TaskModel } from '../model/task';
import { TaskModelInsert } from '../model/task-model-insert';


@Injectable()

export class TaskService {
  public tasksUrl = 'http://ec2-13-58-182-27.us-east-2.compute.amazonaws.com/index.php';  
  constructor (private _http: Http) {
  }
  

  getTasks(){
    return this._http.get(this.tasksUrl+"/tasks").map(res => res.json());
  }

  getTask(id: string){
      return this._http.get(this.tasksUrl+"/task/"+id).map(res => res.json());
  }

  addTask(task: TaskModelInsert) {
    let json = JSON.stringify(task);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.tasksUrl+"/task", 
        params, {headers: headers}).map(res => res.json());
  }

  editTask(id: string, task: TaskModel) {
    let json = JSON.stringify(task);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.tasksUrl+"/update-task/"+id, 
        params, {headers: headers}).map(res => res.json());
  }

  deleteTask(id: string){
    return this._http.get(this.tasksUrl+"/delete-task/"+id)
              .map(res => res.json());
  }
}