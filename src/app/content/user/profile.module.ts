import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { UserProfileModule } from 'src/app/element/user-profile.module';
import { HttpService } from 'src/app/service/http.service';
import { UserProfileContentComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileContentComponent,
    data: {
      profileType: null,
    },
    resolve: {
      keywords: 'keywords$$',
      user: 'user$$',
    },
  },
];

@NgModule({
  declarations: [UserProfileContentComponent],
  exports: [UserProfileContentComponent],
  imports: [UserProfileModule, RouterModule.forChild(routes)],
  providers: [
    {
      provide: 'keywords$$',
      useValue: (route: ActivatedRoute) =>
        HttpService.api().get(
          'users/' + route.snapshot.params.id + '/self-keywords',
          {
            params: {
              expands: 'keyword.concrete',
            },
          }
        ),
    },
    {
      provide: 'user$$',
      useValue: (route: ActivatedRoute) =>
        HttpService.api().get('users/' + route.snapshot.params.id),
    },
  ],
})
export class UserProfileContentModule {}
