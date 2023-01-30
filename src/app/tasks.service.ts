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

  removeTask(_Id: string){
    return this.http.delete(`api/TaskRemove/${_Id}`);
  }

  



  


}


