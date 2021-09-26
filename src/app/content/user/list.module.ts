import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/element/card.module';
import { UserListContentComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListContentComponent,
  },
];

@NgModule({
  declarations: [UserListContentComponent],
  exports: [UserListContentComponent],
  imports: [CardModule, CommonModule, RouterModule.forChild(routes)],
})
export class UserListContentModule {}
