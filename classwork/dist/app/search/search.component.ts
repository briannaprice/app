import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  characters: Array<Object>
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    const searchField = document.getElementById("searchField");
    const searchObservable = fromEvent(searchField, "keyup").pipe(
      map(e => e.target['value']),
      filter(searchString => searchString.length > 3),
      debounceTime(400),
      distinctUntilChanged()
    );
    searchObservable.subscribe(query => this.searchService.charactersByQuery(query).subscribe(_characters => this.characters = this.characters));
  }

}
