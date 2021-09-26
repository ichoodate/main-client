import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGroupModule } from 'src/app/element/card/group.module';
import { MatchingHistoryContentComponent } from './history.component';

const routes: Routes = [
  {
    path: '',
    component: MatchingHistoryContentComponent,
  },
];

@NgModule({
  declarations: [MatchingHistoryContentComponent],
  exports: [MatchingHistoryContentComponent],
  imports: [CardGroupModule, CommonModule, RouterModule.forChild(routes)],
})
export class MatchingHistoryContentModule {}
