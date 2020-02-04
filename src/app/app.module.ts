import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LayoutFooterModule } from 'src/app/layout/footer.module';
import { LayoutHeaderModule } from 'src/app/layout/header.module';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

const routes: Routes = [{
  path: '',
  redirectTo: 'index',
  pathMatch: 'full'
}, {
  path: 'index',
  loadChildren: () => import('src/app/content/index.module').then(m => m.IndexContentModule)
}, {
  path: 'auth',
  children: [{
    path: 'sign-up',
    loadChildren: () => import('src/app/content/auth/sign-up.module').then(m => m.AuthSignUpContentModule),
  }, {
    path: 'sign-in',
    loadChildren: () => import('src/app/content/auth/sign-in.module').then(m => m.AuthSignInContentModule),
  }, {
    path: 'sign-out',
    loadChildren: () => import('src/app/content/auth/sign-out.module').then(m => m.AuthSignOutContentModule),
  }]
}, {
  path: 'matching',
  canActivateChild: [AuthGuardService],
  children: [{
    path: 'today',
    loadChildren: () => import('src/app/content/matching/today.module').then(m => m.MatchingTodayContentModule),
  }, {
    path: 'history',
    loadChildren: () => import('src/app/content/matching/history.module').then(m => m.MatchingHistoryContentModule),
  }]
}, {
  path: 'ideal-type',
  // canActivateChild: [AuthGuardService],
  children: [{
    path: 'profile',
    loadChildren: () => import('src/app/content/ideal-type/profile.module').then(m => m.IdealTypeProfileContentModule),
  }]
}, {
  path: 'my',
  // canActivateChild: [AuthGuardService],
  children: [{
    path: 'account',
    loadChildren: () => import('src/app/content/my/account.module').then(m => m.MyAccountContentModule),
  }, {
    path: 'profile',
    loadChildren: () => import('src/app/content/my/profile.module').then(m => m.MyProfileContentModule),
  }]
}, {
  path: 'users',
  children: [{
    path: '',
    loadChildren: () => import('src/app/content/user/list.module').then(m => m.UserListContentModule),
  }, {
    path: ':id/profile',
    loadChildren: () => import('src/app/content/user/profile.module').then(m => m.UserProfileContentModule),
  }]
// }, {
//   path: '**',
//   loadChildren: 'src/app/content/not-found.module#NotFoundContentModule'
}];

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    // MyProfileContentComponent
  ],
  exports: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutFooterModule,
    LayoutHeaderModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppModule { }
