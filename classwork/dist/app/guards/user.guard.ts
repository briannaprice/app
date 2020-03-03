import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserStoreService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserStoreService, private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.userService.isLoggedIn){
      if(next.url[0].path === 'character'){
        return true
      }
      else{
        return next.params.username === this.userService.currentUser;
      }
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
