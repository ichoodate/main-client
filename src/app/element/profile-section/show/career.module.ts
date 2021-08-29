import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileSectionShowCareerComponent } from './career.component';

@NgModule({
  declarations: [ProfileSectionShowCareerComponent],
  exports: [ProfileSectionShowCareerComponent],
  imports: [CommonModule],
})
export class ProfileSectionShowCareerModule {}
