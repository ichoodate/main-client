import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownSelectComponent } from './dropdown-select.component';

@NgModule({
  declarations: [DropdownSelectComponent],
  exports: [DropdownSelectComponent],
  imports: [CommonModule],
})
export class DropdownSelectModule {}
