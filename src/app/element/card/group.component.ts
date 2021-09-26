import { Component, Input, SimpleChanges } from '@angular/core';
import { CardGroup } from 'src/app/model/card-group';

@Component({
  selector: 'card-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class CardGroupComponent {
  @Input()
  public group?: CardGroup;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.group) {
      this.group.load({
        expands: 'cards.flips, cards.showner.facePhoto',
      });
    }
  }
}
