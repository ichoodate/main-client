import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSectionContainerModule } from 'src/app/element/profile-section/container.module';
import { HttpService } from 'src/app/service/http.service';
import { IdealTypeProfileContentComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: IdealTypeProfileContentComponent,
    data: {
      profileType: 'ideal-type',
    },
    resolve: {
      keywords: 'keywords$$',
    },
  },
];

@NgModule({
  declarations: [IdealTypeProfileContentComponent],
  exports: [IdealTypeProfileContentComponent],
  imports: [
    CommonModule,
    ProfileSectionContainerModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    {
      provide: 'keywords$$',
      useValue: () =>
        HttpService.api().get('ideal-type-keywords', {
          params: {
            expands: 'keyword.concrete',
          },
        }),
    },
  ],
})
export class IdealTypeProfileContentModule {}
