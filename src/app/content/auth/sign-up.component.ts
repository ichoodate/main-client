import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'sign-up-content',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class AuthSignUpContentComponent {
  private router: Router;

  public form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
  });

  constructor(route: ActivatedRoute, router: Router) {
    this.router = router;
  }

  public signUp() {
    HttpService.api()
      .post('auth/sign-up', {
        ...this.form.value,
      })
      .subscribe((attrs: {}) => {
        this.router.navigate(['/']);
      });
  }
}
