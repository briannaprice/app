import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  [x: string]: any;
  allCharacters: any;
  private readonly_characters = new BehaviorSubject<Character[]>([
    {id: 1, name: 'Gryffindor', character: 'Harry', user: 'Harry'},
    {id: 2, name: 'RavenClaw', character: 'Luna', user: 'Luna'},
    {id: 3, name: 'Hufflepuff', character: 'Newt', user: 'Newt'},
    {id: 4, name: 'Slyterin', character: 'Draco', user: 'Draco'},
  ])
  nextId: number = 5;
  constructor(private router: Router) { }

  readonly characters$ = this._characters.asObservable();
  
  private get characters(): Character[]{
    return this._characters.getValue()
  }

  private set characters(val: Character[]){
    this._characters.next(val)
  }

  addCharacter(uName: string, houseName: string, ){
    let newCharacter: Character = {name: houseName, id: this.nextId, user: uName, character: ''}
    this.nextId++;
    this.characters = [...this.characters, newCharacter];
  }
}
