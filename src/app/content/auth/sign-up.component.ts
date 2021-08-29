import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'sign-up-content',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class AuthSignUpContentComponent {
  private auth: AuthService;
  public form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
  });

  constructor(auth: AuthService, route: ActivatedRoute) {
    this.auth = auth;
  }

  public signUp() {
    this.auth.signUp(this.form.value);
  }
}
