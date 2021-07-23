import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import 'firebase/auth';
import firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import { SigninComponent } from 'src/app/signin/signin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  
  constructor(private fireAuth: AngularFireAuth, private router: Router,) {
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
    })
  }

  loginGoogle() {
    return this.fireAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => console.log('login successful', res))
      .catch(error => console.log(error.message))
  }

  async logoutGoogle() {
    await this.fireAuth.signOut().then(() => {
      this.router.navigateByUrl('http://localhost:4200/')
      console.log('logged out')
    })
      // .then(() => {
      //   this.router.navigate(['/'])
      // })
  }

}
