//-------------- Core --------------------------------------//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
//-------------- Firebase ----------------------------------//
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public http: HttpClient,
    public fireStoreAuth: AngularFireAuth,
    private fireStoreDB: AngularFirestore,
  ) { }

  //-------Listen To Auth Changes-------//
  listenToAuthChanges() {
    return this.fireStoreAuth.authState;
  }

  //-------Create User With Email And Password---------------------------------------//
  createUserWithEmailAndPassword(email: string, password: string) {
    return from(this.fireStoreAuth.createUserWithEmailAndPassword(email, password));
  }

  //-------Sign Up ---------------------------------------------------------------------//
  signup(email, password) {
    return from(this.fireStoreAuth.createUserWithEmailAndPassword(email, password));
  }

  //-------Insert New User-----------------------------------------------------------//
  signUpInsertUserAuth(userInsert) {
    const batch = this.fireStoreDB.firestore.batch();

    const userInsertDbRef = this.fireStoreDB.collection('user').doc(userInsert.obj.id).ref;
    batch.set(userInsertDbRef, userInsert.obj);

    const userInsertLogDbRef = this.fireStoreDB.collection('log').doc(userInsert.log.id).ref;
    batch.set(userInsertLogDbRef, userInsert.log);

    return from(batch.commit());
  }

  //------ Verify Password Reset Code ------------------------------------//
  verifyPasswordResetCode(oobCode) {
    return from(this.fireStoreAuth.verifyPasswordResetCode(oobCode));
  }

  //------ Verify Email -------------------------------------------//
  verifyEmail(oodCode) {
    return from(this.fireStoreAuth.applyActionCode(oodCode));
  }


  //------ Change Password -----------------------------------------------------//
  changePassword(oobCode, password) {
    return from(this.fireStoreAuth.confirmPasswordReset(oobCode, password));
  }

  //------ Forgot Password ------------------------------------//
  forgotPassword(email) {
    return from(firebase.auth().sendPasswordResetEmail(email));
  }



  //------ Send Email Verification ------------------------------------------------------//
  sendEmailVerification() {
    return from(this.fireStoreAuth.currentUser.then(user => user.sendEmailVerification()))
  }

  //------ Login In -------------------------------------------------------------//
  login(email, password) {
    return from(this.fireStoreAuth.signInWithEmailAndPassword(email, password));
  }

  //------ Log Out --------------------------------//
  logout() {
    return from(this.fireStoreAuth.signOut());
  }
}