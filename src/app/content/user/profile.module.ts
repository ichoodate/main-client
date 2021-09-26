import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import * as _ from 'lodash';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserProfileModule } from 'src/app/element/user-profile.module';
import { Friend } from 'src/app/model/friend';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { HttpService } from 'src/app/service/http.service';
import { CardFlip } from './../../model/card-flip';
import { UserProfileContentComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileContentComponent,
    data: {
      profileType: null,
    },
    resolve: {
      cardFlip: 'cardFlip$$',
      friend: 'friend$$',
      keywords: 'keywords$$',
      user: 'user$$',
    },
  },
];

@NgModule({
  declarations: [UserProfileContentComponent],
  exports: [UserProfileContentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UserProfileModule],
  providers: [
    {
      provide: 'keywords$$',
      useValue: (route: ActivatedRouteSnapshot) =>
        HttpService.api().get('user-keywords', {
          params: {
            expands: 'keywordObj.concrete',
          },
        }),
    },
    {
      provide: 'user$$',
      useValue: (route: ActivatedRouteSnapshot) => {
        return HttpService.api().get('users/' + route.params.id);
      },
    },
    {
      provide: 'authUser$$',
      useValue: (route: ActivatedRouteSnapshot) => {
        return AuthService.user$();
      },
    },
    {
      provide: 'cardFlip$$',
      useFactory: (
        user$$: (route: ActivatedRouteSnapshot) => Observable<User>,
        authUser$$: (route: ActivatedRouteSnapshot) => Observable<User>
      ) => {
        return (route: ActivatedRouteSnapshot) => {
          return forkJoin({
            user: user$$(route),
            authUser: authUser$$(route),
          }).pipe(
            switchMap(({ user, authUser }) => {
              return HttpService.api().get<CardFlip[]>('card-flips', {
                params: {
                  related_user_id: user.getAttrs().id,
                  flipper_id: authUser.getAttrs().id,
                },
              });
            }),
            map((cardFlips: CardFlip[]) => {
              return _.first(cardFlips) as CardFlip;
            })
          );
        };
      },
      deps: ['user$$', 'authUser$$'],
    },
    {
      provide: 'friend$$',
      useFactory: (
        user$$: (route: ActivatedRouteSnapshot) => Observable<User>,
        authUser$$: (route: ActivatedRouteSnapshot) => Observable<User>
      ) => {
        return (route: ActivatedRouteSnapshot) => {
          return forkJoin({
            user: user$$(route),
            authUser: authUser$$(route),
          }).pipe(
            switchMap(({ user, authUser }) => {
              return HttpService.api().get<Friend[]>('friends', {
                params: {
                  related_user_id: user.getAttrs().id,
                  sender_id: authUser.getAttrs().id,
                },
              });
            }),
            map((cardFlips: Friend[]) => {
              return _.first(cardFlips) as Friend;
            })
          );
        };
      },
      deps: ['user$$', 'authUser$$'],
    },
  ],
})
export class UserProfileContentModule {}
