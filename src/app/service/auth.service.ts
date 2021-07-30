import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
import { User } from 'src/app/model/user';
import { Observable, of } from 'rxjs';
import { concat, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public signedIn: boolean;
  private token: string;
  private authUser: User | null;
  private router: Router;
  private http: HttpClient;

  constructor(router: Router) {

    this.router = router;
    this.http = HttpService.api();
    this.authUser = null;
    this.signedIn = false;
  }

  public isSignIn$(): Observable<any> {

    if ( this.signedIn ) {

      return of(this.signedIn);
    }

    return this.user$().pipe(map((user: User | null): boolean => {

      if ( typeof user == 'object' && user instanceof User ) {

        this.signedIn = true;
      } else {

        this.signedIn = false;
      }

      return this.signedIn;
    }));
  }

  public user$(): Observable<User|null> {

    let user$ = this.authUser ?
      of(this.authUser) : this.http.get<User|null>('auth/user');

    if ( !this.authUser ) {

      user$.subscribe((user) => {
        this.authUser = user;
      });
    }

    return user$;
  }

  public signIn(credentials: {email: string, password: string}): void {

    this.http.post('auth/sign-in', credentials).pipe(
      switchMap(() => {
        return this.isSignIn$();
      })
    ).subscribe((result: boolean) => {

      if ( result ) {
        window.location.reload();
      }
    });
  }

  public signOut(): void {

    this.http.post('auth/sign-out', {
    }).subscribe((attrs: {}) => {

      this.signedIn = false;
      this.authUser = null;

      window.location.reload();
    });
  }

  public signUp(data: {}) {

    this.http.post('auth/sign-up', {
      params: data
    }).subscribe((attrs: {}) => {

      this.router.navigate(['/']);
    });
  }

}
