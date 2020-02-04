import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'auth-sign-out-content',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class AuthSignOutContentComponent {

  constructor(private auth: AuthService) {

    this.auth.signOut();
  }

}
