import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileSectionShowAgeRangeComponent } from './age-range.component';

@NgModule({
  declarations: [ProfileSectionShowAgeRangeComponent],
  exports: [ProfileSectionShowAgeRangeComponent],
  imports: [CommonModule],
})
export class ProfileSectionShowAgeRangeModule {}
