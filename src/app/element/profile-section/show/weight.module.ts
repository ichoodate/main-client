import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionShowWeightComponent } from './weight.component';

@NgModule({
  declarations: [
    ProfileSectionShowWeightComponent
  ],
  exports: [
    ProfileSectionShowWeightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileSectionShowWeightModule { }
