import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileSectionEditResidenceComponent } from './residence.component';

@NgModule({
  declarations: [ProfileSectionEditResidenceComponent],
  exports: [ProfileSectionEditResidenceComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileSectionEditResidenceModule {}
