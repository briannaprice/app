import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './characters/characters.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
    component: SearchComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    CharacterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
