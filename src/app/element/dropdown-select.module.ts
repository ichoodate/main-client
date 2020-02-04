import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectComponent } from './dropdown-select.component';

@NgModule({
  declarations: [
    DropdownSelectComponent
  ],
  exports: [
    DropdownSelectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DropdownSelectModule { }
