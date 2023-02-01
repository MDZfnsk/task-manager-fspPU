import { Injectable } from '@angular/core';
import { Lists } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  //get lists by ID
  getAllListsById(userId: string): Observable<Lists[]> {
    return this.http.get<Lists[]>(`/api/Ulists/${userId}`);
  }

  //get lists from a selected date
  getListsByIdnDate(date: string, id: string): Observable<Lists[]> {
    return this.http.get<Lists[]>(`/api/lists/${date}/${id}`);
  }

  //Get no of lists
  getNoOfLists(date: string, userId: string): Observable<string> {
    return this.http.get<string>(`/api/listsNo/${date}/${userId}`)
  }

  //set a list for a selected date
  addList(name: string, setDate: string, userId: string): Observable<Lists[]> {
    const newList = { name, setDate, userId };
    console.log(newList);
    return this.http.post<Lists[]>(`/api/lists`, { ...newList });
  }


  //Remove list by Id
  removeList(id: string): Observable<Lists[]> {
    return this.http.delete<Lists[]>(`/api/listRemove/${id}`);
  }


}

