import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../services/user.service';
import { Character } from '../interfaces/character';
import { CharactersService } from '../services/characters.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  characters: Character[] = [];
  characterForm: FormGroup;
  username: string;
  actr: any;
  constructor(private userService: UserStoreService, 
    private fb: FormBuilder, private characterService: CharactersService, private router: ActivatedRoute) {
  }

    logout(){
      this.userService.logout()
    }
    ngOnInit(): void {
    }

}
