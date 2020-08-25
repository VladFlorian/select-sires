//-------------- Core ---------------------------------------------------------------------------------------//
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSubService {
  public productListUnsubscribeComponent$ = new Subject<void>();
  public productListUnsubscribe$ = this.productListUnsubscribeComponent$.asObservable();
}

