import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'auth-sign-in-content',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class AuthSignInContentComponent {
  private auth: AuthService;
  public readonly form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(auth: AuthService, route: ActivatedRoute) {
    this.auth = auth;
  }

  public signIn() {
    this.auth.signIn(this.form.value);
  }
}
