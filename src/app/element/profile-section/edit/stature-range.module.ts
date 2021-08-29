import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditStatureRangeComponent } from './stature-range.component';

@NgModule({
  declarations: [ProfileSectionEditStatureRangeComponent],
  exports: [ProfileSectionEditStatureRangeComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileSectionEditStatureRangeModule {}
