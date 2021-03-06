import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileSectionContainerModule } from 'src/app/element/profile-section/container.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
  imports: [CommonModule, ProfileSectionContainerModule],
})
export class UserProfileModule {}
