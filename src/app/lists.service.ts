import { Injectable } from '@angular/core';
import { Lists  } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor( private http: HttpClient) { }


  //get all the lists
  getAllLists(): Observable<Lists[]> {
    
		return this.http.get<Lists[]>(`/api/lists`);
	}




  //get lists from a selected date
  getLists(date: string): Observable<Lists[]> {
		return this.http.get<Lists[]>(`/api/lists/${date}`);
	}

  //get no of lists for a selected date
  getNoOfLists(date:string): Observable<string> {
    return this.http.get<string>(`/api/listsNo/${date}`)
  }

  //set a list for a selected date
  addList(name: string, setDate: string):Observable<Lists[]>{
    const newList = {name,setDate};
    return this.http.post<Lists[]>(`/api/lists`,{...newList});
  }



  /** 
   * 
   * Send the ID in the body ****************** 
  */
  removeList(id:string):Observable<Lists[]>{    
    return this.http.delete<Lists[]>(`/api/listRemove/${id}`);
  }


}

