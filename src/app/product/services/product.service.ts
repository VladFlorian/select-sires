//-------------- Core --------------------------------------------//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
//-------------- Firebase ----------------------------------------//
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    public http: HttpClient,
    public fireStoreAuth: AngularFireAuth,
    private fireStoreDB: AngularFirestore,
  ) { }

  //-------------------Get Client Products -------------------------------------------------------------------------//
  getClientProducts() {
    return this.fireStoreDB.collection('product').get();
  }

  //-------------------Listen Client Products -------------------------------------------------------------------------//
  listenClientProducts() {
    return this.fireStoreDB.collection('product').snapshotChanges();
  }

  //-------------------Add Product --------------------------------------------------------------------------------------------------------//
  addProduct(productInsert) {
    const batch = this.fireStoreDB.firestore.batch();

    const productInsertDbRef = this.fireStoreDB.collection('product').doc(productInsert.obj.id).ref;
    batch.set(productInsertDbRef, productInsert.obj);

    const productInsertLogDbRef = this.fireStoreDB.collection('log').doc(productInsert.log.id).ref;
    batch.set(productInsertLogDbRef, productInsert.log);

    return from(batch.commit());
  }

  //-------------------Update Product --------------------------------------------------------------------------------------------------------//
  updateProduct(updateProduct) {
    const batch = this.fireStoreDB.firestore.batch();

    const updateProductDbRef = this.fireStoreDB.collection('product').doc(updateProduct.obj.id).ref;
    batch.update(updateProductDbRef, updateProduct.obj);

    const updateProductLogDbRef = this.fireStoreDB.collection('log').doc(updateProduct.log.id).ref;
    batch.set(updateProductLogDbRef, updateProduct.log);

    return from(batch.commit());
  }

}
