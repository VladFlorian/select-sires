//-------------- Core ---------------------------------------------//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
//-------------- Firebase -----------------------------------------//
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(
    public http: HttpClient,
    public fireStoreAuth: AngularFireAuth,
    private fireStoreDB: AngularFirestore,
  ) { }

  //------------------ Get Client Logs ---------------------------------//
  getClientLogs(clientId) {
    return this.fireStoreDB.collection('client/log').doc(clientId).get();
  }

  //------------------ Get User Logs ------------------------------//
  getUserLogs(userId) {
    return this.fireStoreDB.collection('user/log').doc(userId).get();
  }
}