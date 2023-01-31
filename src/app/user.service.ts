import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userAuthentication(uName: string, psw: string){
    return this.http.post(`/api/users`,{uName,psw});
  }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('/api/users');
  }

  addNewUser(object: any): Observable<string>{    
    return this.http.post<string>(`/api/addUser`,{...object});
  }


  getOneUser(userId: string): Observable<string> {
    return this.http.get<string>(`/api/users/${userId}`)
  }
}
