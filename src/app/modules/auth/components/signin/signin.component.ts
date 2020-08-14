import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
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
  ) { }

  ngOnInit(): void {
  }

  signInWithEmail() {
    const { email, password } = this.form.value;
    this.authService.signInWithEmail(email, password);
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook();
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
