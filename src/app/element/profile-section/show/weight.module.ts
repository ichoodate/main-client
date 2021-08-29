import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileSectionShowWeightComponent } from './weight.component';

@NgModule({
  declarations: [ProfileSectionShowWeightComponent],
  exports: [ProfileSectionShowWeightComponent],
  imports: [CommonModule],
})
export class ProfileSectionShowWeightModule {}
