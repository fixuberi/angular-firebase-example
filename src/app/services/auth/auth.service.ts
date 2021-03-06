import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { SnackBarService } from '../snack-bar/snack-bar.service';

interface UserData extends Partial<firebase.User> {}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  readonly LS_USER_DATA_KEY = "firebaseUser";

  public user: UserData | null = null;

  constructor(
    public fireStore: AngularFirestore,
    public fireAuth: AngularFireAuth,
    public router: Router,
    private snackBar: SnackBarService,
  ) {
    this.fireAuth.authState.subscribe((user: UserData) => {
      this.setUserDataLocaly(user);
    });
  }

  // Returns true when user is looged in and email is verified
  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem(this.LS_USER_DATA_KEY));

    return user && user.emailVerified;
  }

  public signUpWithEmail(email, password) {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => this.sendEmailVerification(email))
      .catch(({ message }) => this.snackBar.error(message));
  }

  public signInWithEmail(email, password) {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          throw Error('You should verify your email');
        }

        this.setUserDataLocaly(result.user);
        this.router.navigate([""]);
      })
      .catch(({ message }) => this.snackBar.error(message));
  }

  public signInWithGoogle() {
    return this.authProviderLogin(new firebase.auth.GoogleAuthProvider());
  }

  public signInWithFacebook() {
    return this.authProviderLogin(new firebase.auth.FacebookAuthProvider());
  }

  public signOut() {
    return this.fireAuth.signOut().then(() => {
      this.setUserDataLocaly(null);
      this.router.navigate(["auth", "signin"]);
    });
  }

  private sendEmailVerification(email: string) {
    return this.fireAuth.currentUser.then((user) => {
      user.sendEmailVerification();
      this.router.navigate(["auth", "verify-email-address", email]);
    });
  }

  private authProviderLogin(
    provider: firebase.auth.FacebookAuthProvider_Instance
  ) {
    return this.fireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.setUserDataLocaly(result.user);
        this.router.navigate([""]);
        this.setUserDataInFirestore(result.user);
      })
      .catch(({ message }) => this.snackBar.error(message));
  }

  private setUserDataInFirestore(user: UserData) {
    const userRef: AngularFirestoreDocument<any> = this.fireStore.doc(
      `users/${user.uid}`
    );
    const userData: UserData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }

  private setUserDataLocaly(user: UserData = null): void {
    this.user = user;
    user
      ? localStorage.setItem(this.LS_USER_DATA_KEY, JSON.stringify(user))
      : localStorage.setItem(this.LS_USER_DATA_KEY, null);
  }
}
