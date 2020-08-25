//--------------- Core ----------------------------------------------------//
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSubService {
  public authUnsubscribeComponent$ = new Subject<void>();
  public authUnsubscribe$ = this.authUnsubscribeComponent$.asObservable();
 }