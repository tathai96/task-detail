import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users?per_page=12');
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  deleteUsers(userid: number) {
    return this.http.delete(`https://reqres.in/api/users/${userid}`);
  }
}
