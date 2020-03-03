import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { map } from 'rxjs/operators';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private router: Router) { }

  charactersByQuery(searchString){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters`).pipe(
      map(res => res["data"])
    )
  }
}