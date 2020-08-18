import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';
@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form = this.fb.group({
    email: ['', [ Validators.required ]],
    password: ['', [ Validators.required ]],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: SnackBarService,
  ) { }

  ngOnInit(): void {
  }

  signInWithEmail() {
    const { email, password } = this.form.value;
    this.authService.signInWithEmail(email, password);
  }

  signInWithFacebook() {
    this.snackBar.error('Sorry, Facebook auth is not available now =( We working on it');
    return;

    this.authService.signInWithFacebook();
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
