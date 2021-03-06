import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditReligionComponent } from './religion.component';

@NgModule({
  declarations: [ProfileSectionEditReligionComponent],
  exports: [ProfileSectionEditReligionComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileSectionEditReligionModule {}
