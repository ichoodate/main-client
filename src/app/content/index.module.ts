import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class IndexContentModule {}
