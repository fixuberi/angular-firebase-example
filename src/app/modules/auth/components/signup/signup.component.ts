import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form = this.fb.group({
    email: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    passwordConfirm: ['', [ Validators.required ]],
  }, {
    validators: [this.confirmPasswordValidator]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    const { email, password } = this.form.value;
    this.authService.signUpWithEmail(email, password);
  }

  confirmPasswordValidator(ac: AbstractControl): ValidationErrors | null {
    const { password, passwordConfirm } = ac.value;
    if ( password !== passwordConfirm ) {
      return { password: 'Confirm password mismatch' };
    }
    return null;
  }
}
