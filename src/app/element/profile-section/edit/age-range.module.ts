import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditAgeRangeComponent } from './age-range.component';

@NgModule({
  declarations: [
    ProfileSectionEditAgeRangeComponent
  ],
  exports: [
    ProfileSectionEditAgeRangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProfileSectionEditAgeRangeModule { }
