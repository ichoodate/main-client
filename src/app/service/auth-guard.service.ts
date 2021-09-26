import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService
  implements CanActivate, CanActivateChild, CanLoad
{
  constructor(private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.requestedSignIn$();
  }

  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.requestedSignIn$();
  }

  public canLoad(route: Route): any {
    return this.requestedSignIn$();
  }

  public requestedSignIn$(): Observable<boolean> {
    return AuthService.user$().pipe(
      map((result: User | null) => {
        if (!result) {
          this.router.navigate(['/auth/sign-in']);
          return false;
        }

        return true;
      })
    );
  }
}
