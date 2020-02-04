import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSignOutContentComponent } from 'src/app/content/auth/sign-out.component';

const routes: Routes = [{
  path: '',
  component: AuthSignOutContentComponent
}];

@NgModule({
  declarations: [
    AuthSignOutContentComponent
  ],
  exports: [
    AuthSignOutContentComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthSignOutContentModule { }
