import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerModule } from 'src/app/element/card/container.module';
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
  imports: [RouterModule.forChild(routes), CardContainerModule],
})
export class MatchingTodayContentModule {}
