import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'card-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class CardContainerComponent {
  @Input()
  public users: User[] = [];
}
