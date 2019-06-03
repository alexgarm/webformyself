import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControlStatus } from '@angular/forms';
import { format } from 'url';
import { AuthService } from '../shared/services/auth.service';
import { error } from '@angular/compiler/src/util';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  aSub: Subscription;

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.form = new FormGroup( {
      email: new FormControl( null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
      }
    );
    this.route.queryParams.subscribe((params: Params) => {
      if (params.registered) {
        // теперь вы можете зайти в систему используя свои данные
// tslint:disable-next-line: one-line
      }else if (params.accessDenied){
        // для начала авторизируйтесь
      }
    });
  }
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
  onSubmit() {
      this.form.disable();
      this.aSub = this.auth.login(this.form.value).subscribe(
        () => this.router.navigate(['/overview']),
        error => {
          console.warn(error);
          this.form.enable();
        });
  }
}
