import { NgModule } from '@angular/core';
import { NotFoundContentComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: NotFoundContentComponent
}];

@NgModule({
  declarations: [
    NotFoundContentComponent
  ],
  exports: [
    NotFoundContentComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class NotFoundContentModule { }
