import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class LayoutHeaderComponent {
  public auth: typeof AuthService;

  constructor() {
    this.auth = AuthService;
  }
}
