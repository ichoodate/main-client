import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGroupModule } from 'src/app/element/card/group.module';
import { MatchingTodayContentComponent } from './today.component';

const routes: Routes = [
  {
    path: '',
    component: MatchingTodayContentComponent,
  },
];

@NgModule({
  declarations: [MatchingTodayContentComponent],
  exports: [MatchingTodayContentComponent],
  imports: [CardGroupModule, CommonModule, RouterModule.forChild(routes)],
})
export class MatchingTodayContentModule {}
