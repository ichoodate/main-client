import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditWeightComponent } from './weight.component';

@NgModule({
  declarations: [ProfileSectionEditWeightComponent],
  exports: [ProfileSectionEditWeightComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileSectionEditWeightModule {}
