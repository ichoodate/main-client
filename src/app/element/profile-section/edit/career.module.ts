import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditCareerComponent } from './career.component';

@NgModule({
  declarations: [
    ProfileSectionEditCareerComponent
  ],
  exports: [
    ProfileSectionEditCareerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProfileSectionEditCareerModule { }
