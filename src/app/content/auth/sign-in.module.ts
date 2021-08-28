import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthSignInContentComponent } from 'src/app/content/auth/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSignInContentComponent,
  },
];

@NgModule({
  declarations: [AuthSignInContentComponent],
  exports: [AuthSignInContentComponent],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AuthSignInContentModule {}
