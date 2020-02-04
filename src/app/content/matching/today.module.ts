import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchingTodayContentComponent } from './today.component';
import { CardContainerModule } from 'src/app/element/card/container.module';
import { HttpService } from 'src/app/service/http.service';

const routes: Routes = [{
  path: '',
  component: MatchingTodayContentComponent
}];

@NgModule({
  declarations: [
    MatchingTodayContentComponent
  ],
  exports: [
    MatchingTodayContentComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CardContainerModule
  ]
})
export class MatchingTodayContentModule { }
