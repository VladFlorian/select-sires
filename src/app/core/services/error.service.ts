//-------------- Core -------------------------------------//
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
//-------------- Firebase --------------------------------//
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class ErrorService {
    constructor(
        public fireStoreDB: AngularFirestore,
    ) { }

    //---------------Insert Error---------------------------------------------------------------------//
    insertError(insertObj: any) {
        return from(this.fireStoreDB.collection('error').doc(insertObj.id).set({ ...insertObj }));
    }


}
