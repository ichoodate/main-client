import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'auth-sign-out-content',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class AuthSignOutContentComponent {
  constructor(router: Router) {
    AuthService.signOut();
    router.navigate(['/']);
  }
}
