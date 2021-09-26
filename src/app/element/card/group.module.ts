import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../card.module';
import { CardGroupComponent } from './group.component';

@NgModule({
  declarations: [CardGroupComponent],
  exports: [CardGroupComponent],
  imports: [CommonModule, CardModule],
})
export class CardGroupModule {}
