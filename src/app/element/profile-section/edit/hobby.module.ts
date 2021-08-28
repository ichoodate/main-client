import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditHobbyComponent } from './hobby.component';

@NgModule({
  declarations: [ProfileSectionEditHobbyComponent],
  exports: [ProfileSectionEditHobbyComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileSectionEditHobbyModule {}
