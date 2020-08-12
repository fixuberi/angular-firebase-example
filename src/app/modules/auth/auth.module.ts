import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailAddressComponent } from './components/verify-email-address/verify-email-address.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    VerifyEmailAddressComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
