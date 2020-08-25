//-------------- Core -------------------------------------//
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
//-------------- Data Models ------------------------------//
import { UserDb } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    public fireStoreDB: AngularFirestore,
  ) { }

  //------------------ Get User ----------------------------------------------------------------//
  getUser(userId:string) {
    return from(this.fireStoreDB.collection('user').doc(userId).get());
  }

  //------------------ Insert User -------------------------------------------------------------//
  insertUser(userInsert) {
    const batch = this.fireStoreDB.firestore.batch();

    const userInsertDbRef = this.fireStoreDB.collection('user').doc(userInsert.obj.id).ref;
    batch.set(userInsertDbRef, userInsert.obj);

    const userInsertLogDbRef = this.fireStoreDB.collection('log').doc(userInsert.log.id).ref;
    batch.set(userInsertLogDbRef, userInsert.log);

    return from(batch.commit());
  }  
  
}
