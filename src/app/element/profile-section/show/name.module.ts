import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionShowNameComponent } from './name.component';

@NgModule({
  declarations: [ProfileSectionShowNameComponent],
  exports: [ProfileSectionShowNameComponent],
  imports: [CommonModule],
})
export class ProfileSectionShowNameModule {}
