import { Injectable } from '@angular/core';
import { Lists  } from './types';
import { Tasks } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private http: HttpClient) { }  


  //get lists from a selected date
  getSelectedTasks(_listId: string): Observable<Tasks[]> {    
		return this.http.get<Tasks[]>(`/api/tasks/${_listId}`);
	}

  removeTask(_Id: string): Observable<Tasks[]>{
    return this.http.delete<Tasks[]>(`api/TaskRemove/${_Id}`);
  }

  //Edit the task name
  editTask(Id: string,name: string): Observable<Tasks[]> {
    
    return this.http.patch<Tasks[]>(`api/editTasks/${Id}`,{name});
  }

  //Edit the Task's Completeion Status
  markTaskComplete(Id: string,status:boolean): Observable<Tasks[]> {  
    
    return this.http.patch<Tasks[]>(`api/taskComplete/${Id}`,{status: !status});
  }

  //set a task under selected list
  addTask(name: string, _listId : string):Observable<Tasks[]>{
    const newTask = {name,_listId,isCompleted: false};
    return this.http.post<Tasks[]>(`/api/addTask`,{...newTask});
  } 


}


