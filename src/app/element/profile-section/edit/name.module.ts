import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditNameComponent } from './name.component';

@NgModule({
  declarations: [
    ProfileSectionEditNameComponent
  ],
  exports: [
    ProfileSectionEditNameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProfileSectionEditNameModule { }
