import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  signOut() {
    this.authService.signOut();
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
  }

  goToSignIn() {
    this.router.navigate(['auth', 'signin']);
  }

  goToSignUp() {
    this.router.navigate(['auth', 'signup']);
  }

  get userPhotoUrl(): string {
    return this.user.photoURL || '../../../assets/default-avatar.jpg';
  }

  get userDisplayName(): string {
    return this.user.displayName;
  }

  get userEmail(): string {
    return this.user.email;
  }

  private get user() {
    return this.authService.user || {};
  }

}
