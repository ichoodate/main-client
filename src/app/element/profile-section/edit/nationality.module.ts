import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditNationalityComponent } from './nationality.component';

@NgModule({
  declarations: [ProfileSectionEditNationalityComponent],
  exports: [ProfileSectionEditNationalityComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileSectionEditNationalityModule {}
