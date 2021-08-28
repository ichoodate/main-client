import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexContentComponent } from './index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexContentComponent,
  },
];

@NgModule({
  declarations: [IndexContentComponent],
  exports: [IndexContentComponent],
  imports: [RouterModule.forChild(routes)],
})
export class IndexContentModule {}
