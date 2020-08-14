import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailAddressComponent } from './components/verify-email-address/verify-email-address.component';
import { MatInputModule, MatIconModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    VerifyEmailAddressComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AuthModule { }
