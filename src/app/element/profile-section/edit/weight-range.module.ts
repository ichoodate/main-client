import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditWeightRangeComponent } from './weight-range.component';

@NgModule({
  declarations: [
    ProfileSectionEditWeightRangeComponent
  ],
  exports: [
    ProfileSectionEditWeightRangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProfileSectionEditWeightRangeModule { }
