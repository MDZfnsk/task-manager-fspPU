import { Injectable } from '@angular/core';
import { Lists  } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor( private http: HttpClient) { }


  getLists(date: string): Observable<Lists[]> {
		return this.http.get<Lists[]>(`/api/lists/${date}`);
	}

  getNoOfLists(date:string): Observable<string> {
    return this.http.get<string>(`/api/listsNo/${date}`)
  }

  addList(name: string, setDate: string):Observable<Lists[]>{
    const newList = {name,setDate};
    return this.http.post<Lists[]>(`/api/lists`,{...newList});
  }

  /** 
   * 
   * Send the ID in the body ****************** 
  */
  removeList(_id:string):Observable<Lists[]>{    
    return this.http.delete<Lists[]>(`/api/listRemove/${_id}`);
  }


}

