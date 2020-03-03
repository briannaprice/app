import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  [x: string]: any;
  isLoggedIn: boolean = false;
  constructor(private router: Router) { }
  
  get currentUser(){
    return localStorage.getItem("user")
  }

  login(username, password){
    this.isLoggedIn = true;
    localStorage.setItem("user", username);
    this.router.navigate([`/user/${username}`])
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  getCharacters(search){
    return this.http.get(`http://www.potterapi.com/v1/?apikey=$2a$10$VO8SpcvxK9MXoASZqnrsu.u.plfPTx8YGqBbBjRUhsV6BQfPdy4pe`).pipe(
      map(res=> res['Search']),
      map((res: Object[])=>res.map(character=> {
        if(character['Poster'] == null){
          character['Poster'] = "http://www.potterapi.com/v1/";
        }
        return character;
      }))
    );
  }
}
