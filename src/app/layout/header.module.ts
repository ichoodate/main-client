import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './header.component';

@NgModule({
  declarations: [LayoutHeaderComponent],
  exports: [LayoutHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutHeaderModule {}
