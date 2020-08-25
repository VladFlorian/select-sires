//---------------CORE-------------------------------------//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
//---------------FIREBASE----------------------------------//
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
//-------REMOVE ONLY USED FOR CREATING TEST DATA RIGHT NOW--------------///
import { FirebaseHelper } from './../../shared/helpers/firebase.helper';


@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor(
        public http: HttpClient,
        public fireStoreAuth: AngularFireAuth,
        private fireStoreDB: AngularFirestore,
        private firebaseHelper: FirebaseHelper,
    ) { }


    //-------Test Add New Client-----------------------------------------------------------//
    testAddNewClient(newUser) {
        const client = {
            id: this.firebaseHelper.generateFirebaeId(),
            address: '1145 bute street ',
            lat: null,
            lng: null,
            phone: '437-344-1243',
            bio: '',
            name: 'Dagmar',
            email: '',
            subdomain: 'dagmar',
            pointOfContact: null,
            photoUrl: null,
            promotionalPhotoUrl: null,
            promotionalUrl: null,
            languages: ['en'],
            defaultLanguage: 'en',
            timezone: null,
            author: null,
            editor: null,
            authored: new Date(),
            edited: new Date(),
        };
        return from(this.fireStoreDB.collection('client').doc(client.id).set({ ...client }));
    }

    
}