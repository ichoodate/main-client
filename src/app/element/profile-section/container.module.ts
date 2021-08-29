import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileSectionContainerComponent } from './container.component';

@NgModule({
  declarations: [ProfileSectionContainerComponent],
  exports: [ProfileSectionContainerComponent],
  imports: [CommonModule],
})
export class ProfileSectionContainerModule {}
