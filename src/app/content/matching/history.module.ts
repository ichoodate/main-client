import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerModule } from 'src/app/element/card/container.module';
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
  imports: [RouterModule.forChild(routes), CardContainerModule],
})
export class MatchingHistoryContentModule {}
