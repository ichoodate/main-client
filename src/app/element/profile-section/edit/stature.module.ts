import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditStatureComponent } from './stature.component';

@NgModule({
  declarations: [
    ProfileSectionEditStatureComponent
  ],
  exports: [
    ProfileSectionEditStatureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProfileSectionEditStatureModule { }
