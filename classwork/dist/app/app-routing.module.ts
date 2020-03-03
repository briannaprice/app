import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CharacterComponent } from './characters/characters.component';
import { UserGuard } from './guards/user.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'character', component: CharacterComponent, canActivate: [UserGuard]},
  { path: 'user/:username', component: UserComponent, canActivate: [UserGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
