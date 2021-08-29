import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutFooterComponent } from './footer.component';

// const routes: Routes = [{
//   path: '',
//   component: LayoutFooterComponent,
// }];

@NgModule({
  declarations: [LayoutFooterComponent],
  exports: [LayoutFooterComponent],
  imports: [
    RouterModule,
    // RouterModule.forChild(routes)
  ],
})
export class LayoutFooterModule {}
