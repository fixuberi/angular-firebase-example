import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { VerifyEmailAddressComponent } from "./components/verify-email-address/verify-email-address.component";
import { IsNotAuthGuard } from "./guards/is-not-auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full",
    canActivate: [IsNotAuthGuard],
  },
  {
    path: "signin",
    component: SigninComponent,
    canActivate: [IsNotAuthGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [IsNotAuthGuard],
  },
  {
    path: "verify-email-address/:email",
    component: VerifyEmailAddressComponent,
    canActivate: [IsNotAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
