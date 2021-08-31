import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ObservableInput, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public signedIn: boolean;
  public route: ActivatedRoute;
  private authUser: User | null;
  private router: Router;
  private http: HttpClient;

  constructor(route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;
    this.http = HttpService.api();
    this.authUser = null;
    this.signedIn = false;
  }

  public isSignIn$(): Observable<any> {
    if (this.signedIn) {
      return of(this.signedIn);
    }

    return this.user$().pipe(
      map((user: User | null): boolean => {
        if (typeof user == 'object' && user instanceof User) {
          this.signedIn = true;
        } else {
          this.signedIn = false;
        }

        return this.signedIn;
      })
    );
  }

  public user$(): Observable<User | null> {
    let user$ = this.authUser
      ? of(this.authUser)
      : this.http.get<User | null>('auth/user');

    if (!this.authUser) {
      user$.subscribe((user) => {
        this.authUser = user;
      });
    }

    return user$;
  }

  public signIn(credentials: { email: string; password: string }): void {
    this.http
      .post<string>('auth/sign-in', credentials)
      .pipe(
        switchMap((result: string): ObservableInput<User> => {
          localStorage.setItem('ichoodate-auth-token', result);
          return HttpService.api().get<User>('auth/user');
        })
      )
      .subscribe((user: User) => {
        this.authUser = user;
        if (user) {
          this.goPreviousPage();
        }
      });
  }

  public signOut(): void {
    this.http.post('auth/sign-out', {}).subscribe((attrs: {}) => {
      this.signedIn = false;
      this.authUser = null;

      this.router.navigate(['/']);
    });
  }

  public signUp(data: {}) {
    this.http
      .post('auth/sign-up', {
        params: data,
      })
      .subscribe((attrs: {}) => {
        this.router.navigate(['/']);
      });
  }

  public goPreviousPage() {
    const params: Record<string, unknown> = {};
    const referrer = this.route.snapshot.queryParams.referrer
      ? this.route.snapshot.queryParams.referrer
      : '/';
    const path = referrer.match('.*(?=(\\?))')
      ? referrer.match('.*(?=(\\?))')[0]
      : referrer;

    (referrer.match('(?<=(\\?)).*')
      ? referrer.match('(?<=(\\?)).*')[0].split('&')
      : []
    ).forEach((str: string) => {
      params[str.split('=')[0]] = str.split('=')[1];
    });

    this.router.navigate([path], {
      queryParams: params,
    });
  }
}
