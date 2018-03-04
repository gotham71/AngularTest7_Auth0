import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate  } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor( private auth: AuthService ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    console.log(next);

    if(this.auth.isAuthenticated()) {
      console.log('guard says yes... ;) go on!');
      return true;
    } else {
      console.error('guard says.... go home!!');
      return false;
    }
  }

}
