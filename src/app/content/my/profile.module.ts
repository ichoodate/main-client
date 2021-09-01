import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserProfileModule } from 'src/app/element/user-profile.module';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { HttpService } from 'src/app/service/http.service';
import { MyProfileContentComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: MyProfileContentComponent,
    data: {
      profileType: 'user',
    },
    resolve: {
      keywords: 'keywords$$',
      user: 'user$$',
    },
  },
];

@NgModule({
  declarations: [MyProfileContentComponent],
  exports: [MyProfileContentComponent],
  imports: [UserProfileModule, RouterModule.forChild(routes)],
  providers: [
    {
      provide: 'keywords$$',
      useFactory: (user$$: () => Observable<User>) => {
        return () =>
          user$$().pipe(
            switchMap((user: User) => {
              return HttpService.api().get('user-keywords', {
                params: {
                  expands: 'keywordObj.concrete',
                },
              });
            })
          );
      },
      deps: ['user$$'],
    },
    {
      provide: 'user$$',
      useFactory: (auth: AuthService) => {
        return () => auth.user$();
      },
      deps: [AuthService],
    },
  ],
})
export class MyProfileContentModule {}
