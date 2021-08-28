import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './container.component';
import { CardModule } from '../card.module';

@NgModule({
  declarations: [CardContainerComponent],
  exports: [CardContainerComponent],
  imports: [CommonModule, CardModule],
})
export class CardContainerModule {}
