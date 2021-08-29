import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundContentComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundContentComponent,
  },
];

@NgModule({
  declarations: [NotFoundContentComponent],
  exports: [NotFoundContentComponent],
  imports: [RouterModule.forChild(routes)],
})
export class NotFoundContentModule {}
