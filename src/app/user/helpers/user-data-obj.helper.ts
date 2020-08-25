//---------------CORE-----------------------------------------------//
import { Injectable } from '@angular/core';
//---------------SERVICES/HELPERS-----------------------------------//
import { FirebaseHelper } from '../../shared/helpers/firebase.helper';
//---------------MODELS/DATA----------------------------------------//
import { initialUserDb } from './../../user/models/user.model';
import { SignUpFormObj } from './../../auth/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataObjHelper {
  initialModifiedFields = [];
  constructor(
    public firebaseHelper: FirebaseHelper,
  ) { }

}