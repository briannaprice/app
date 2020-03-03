import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../services/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private userService: UserStoreService, 
    private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  login(e){
    e.preventDefault();
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value.username, this.loginForm.value.password);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(8)])]
    });
  }

}
