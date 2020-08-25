//---------------CORE--------------------------------------//
import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class FirebaseHelper {

  constructor(
    public fireStoreDB: AngularFirestore,
  ) { }

  public enrichFirebaseRes(firebaseResponse: any) {
    if (firebaseResponse.docs) {
      return firebaseResponse.docs.map((doc: any) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
    } else {
      return firebaseResponse.map((item: any) => {
        return {
          ...item.payload.doc.data()
        };
      });
    }
  }

  public enrichDocument(document: any) {
    return {
      ...document.data()
    };
  }

  public generateFirebaeId () {
    return this.fireStoreDB.createId();
  }
}
