import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IdealTypeProfileContentComponent } from './profile.component';
import { ProfileSectionContainerModule } from 'src/app/element/profile-section/container.module';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

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
