import { Injectable, NgZone } from '@angular/core';
import { environment } from '@environment/environment';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToasterService } from './toaster.service';
import { FirebaseError } from 'firebase/app';
import {
  setLanguage,
  getTranslation,
} from '@core/helpers/firebase-error-translations';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData!: firebase.User;

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public toaster: ToasterService,
    public userService: UserService
  ) {
    setLanguage('en');

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.userService.saveUser(this.userData);
      }
    });
  }

  getApiKey() {
    return environment.MOVIE_API_KEY;
  }

  async SignIn(email: string, password: string) {
    const result = await this.afAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error: FirebaseError) => {
        this.toaster.error(getTranslation(error.code));
        return { user: null };
      });

    const user = result.user as firebase.User;

    await this.ngZone.run(async () => {
      await this.router.navigate(['home']);
    });

    await this.SetUserData(user);
  }

  async SignUp(email: string, password: string) {
    const result = await this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((error: FirebaseError) => {
        this.toaster.error(getTranslation(error.code));
        return { user: null };
      });

    const user = result.user;
    if (user) {
      // await this.SendVerificationMail(user);
      await this.ngZone.run(async () => {
        await this.router.navigate(['login']);
      });
      await this.SetUserData(user);
    }
  }

  // // Send email verfificaiton when new user sign up
  async SendVerificationMail(user: firebase.User) {
    await user.sendEmailVerification();
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.toaster.success(
          'Success',
          'Password reset email sent, check your inbox.'
        );
      })
      .catch((error: FirebaseError) => {
        this.toaster.error(getTranslation(error.code));
      });
  }

  get isLoggedIn(): boolean {
    const user = this.userService.user;
    return user !== null;
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider: firebase.auth.AuthProvider) {
    const result = await this.afAuth
      .signInWithPopup(provider)
      .catch((error: FirebaseError) => {
        this.toaster.error(getTranslation(error.code));
        return { user: null };
      });
    const user = result.user;
    if (user) {
      await this.ngZone.run(async () => {
        await this.router.navigate(['home']);
      });
      await this.SetUserData(user);
    }
  }

  /* Setting up user data when sign in with username/password, 
    sign up with username/password and sign in with social auth  
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<unknown> =
      this.afs.doc<firebase.User>(`users/${user.uid}`);
    const userData = {
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

  // Sign out
  async SignOut() {
    await this.afAuth.signOut();
    this.userService.removeUser();
    await this.router.navigate(['home']);
  }
}
