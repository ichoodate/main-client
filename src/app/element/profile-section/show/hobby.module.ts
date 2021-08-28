import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionShowHobbyComponent } from './hobby.component';

@NgModule({
  declarations: [ProfileSectionShowHobbyComponent],
  exports: [ProfileSectionShowHobbyComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileSectionShowHobbyModule {}
