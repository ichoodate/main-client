import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerModule } from 'src/app/element/card/container.module';
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
  imports: [RouterModule.forChild(routes), CardContainerModule],
})
export class UserListContentModule {}
