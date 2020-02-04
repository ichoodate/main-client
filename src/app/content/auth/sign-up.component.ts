import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sign-up-content',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class AuthSignUpContentComponent {

  private auth: AuthService;
  public form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl('')
  });

  constructor(auth: AuthService, route: ActivatedRoute) {
    console.log(route.snapshot.data);
    this.auth = auth;
  }

  public signUp() {

    this.auth.signUp(this.form.value);
  }

}
