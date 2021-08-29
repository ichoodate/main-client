import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../card.module';
import { CardContainerComponent } from './container.component';

@NgModule({
  declarations: [CardContainerComponent],
  exports: [CardContainerComponent],
  imports: [CommonModule, CardModule],
})
export class CardContainerModule {}
