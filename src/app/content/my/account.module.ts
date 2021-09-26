import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountContentComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountContentComponent,
  },
];

@NgModule({
  declarations: [MyAccountContentComponent],
  exports: [MyAccountContentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MyAccountContentModule {}
