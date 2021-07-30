import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private auth: AuthService, private router: Router) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    return this.requestedSignIn$();
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    return this.requestedSignIn$();
  }

  public canLoad(route: Route): any {

    return this.requestedSignIn$();
  }

  public requestedSignIn$(): Observable<boolean> {

    let observ = this.auth.isSignIn$();

    observ.subscribe((result: boolean) => {

      if (!result) {

        this.router.navigate(['/auth/sign-in']);
      }
    });

    return observ;
  }

}
