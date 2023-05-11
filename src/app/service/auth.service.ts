import { Injectable } from '@angular/core';
import { Observable, ObservableInput, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static authUser: User | null;

  public static user$(): Observable<User | null> {
    if (!AuthService.authUser) {
      const user$ = HttpService.api().get<User | null>('auth/user');
      user$.subscribe((user) => {
        AuthService.authUser = user;
      });

      return user$;
    }

    return of(AuthService.authUser);
  }

  public static signIn$(credentials: {
    email: string | null;
    password: string | null;
  }) {
    return HttpService.api()
      .post<string>('auth/sign-in', credentials)
      .pipe(
        switchMap((result: string): ObservableInput<User> => {
          localStorage.setItem('ichoodate-auth-token', result);
          return HttpService.api().get<User>('auth/user', {
            params: {
              expands: ['facePhoto'],
            },
          });
        }),
        map((user: User) => {
          AuthService.authUser = user;
          return user;
        })
      );
  }

  public static signOut(): void {
    localStorage.removeItem('ichoodate-auth-token');
    AuthService.authUser = null;
  }

  public static getUser(): User {
    return AuthService.authUser as User;
  }
}
