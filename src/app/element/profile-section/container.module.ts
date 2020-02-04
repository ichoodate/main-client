import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionContainerComponent } from './container.component';

@NgModule({
  declarations: [
    ProfileSectionContainerComponent
  ],
  exports: [
    ProfileSectionContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileSectionContainerModule { }
