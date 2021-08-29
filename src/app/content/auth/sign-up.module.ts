import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthSignUpContentComponent } from 'src/app/content/auth/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSignUpContentComponent,
  },
];

@NgModule({
  declarations: [AuthSignUpContentComponent],
  exports: [AuthSignUpContentComponent],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AuthSignUpContentModule {}
