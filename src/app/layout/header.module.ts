import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutHeaderComponent } from './header.component';

@NgModule({
  declarations: [LayoutHeaderComponent],
  exports: [LayoutHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutHeaderModule {}
