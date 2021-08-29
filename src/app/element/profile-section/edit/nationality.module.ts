import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditNationalityComponent } from './nationality.component';

@NgModule({
  declarations: [ProfileSectionEditNationalityComponent],
  exports: [ProfileSectionEditNationalityComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileSectionEditNationalityModule {}
