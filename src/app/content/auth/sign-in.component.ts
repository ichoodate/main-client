import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'auth-sign-in-content',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class AuthSignInContentComponent {
  private route: ActivatedRoute;
  private router: Router;

  public readonly form = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;
  }

  public signIn() {
    AuthService.signIn$(this.form.getRawValue()).subscribe((user: User) => {
      if (user) {
        this.goPreviousPage();
      }
    });
  }

  public goPreviousPage() {
    const params: Record<string, unknown> = {};
    const referrer = this.route.snapshot.queryParams.referrer
      ? this.route.snapshot.queryParams.referrer
      : '/';
    const path = referrer.match('.*(?=(\\?))')
      ? referrer.match('.*(?=(\\?))')[0]
      : referrer;

    (referrer.match('(?<=(\\?)).*')
      ? referrer.match('(?<=(\\?)).*')[0].split('&')
      : []
    ).forEach((str: string) => {
      params[str.split('=')[0]] = str.split('=')[1];
    });

    this.router.navigate([path], {
      queryParams: params,
    });
  }
}
