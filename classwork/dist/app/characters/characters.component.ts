import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { CharactersService } from '../services/characters.service';
import { UserStoreService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];
  characterForm: FormGroup
  constructor(private characterStore: CharactersService, private userStore: UserStoreService, private fb: FormBuilder) {
  }

  logout(){
    this.userStore.logout()
  }

  addCharacter(e){
    e.preventDefault()
    if(this.characterForm.valid){
      this.characterStore.addCharacter(this.characterForm.value.user, this.characterForm.value.name);
    }
  }

  ngOnInit(): void {
    this.characterStore.characters$.subscribe(characters=> this.characters = characters)
    this.characterForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      user: ['', Validators.compose([Validators.required])]
    })
  }

}
