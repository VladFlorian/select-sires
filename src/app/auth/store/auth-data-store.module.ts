//-------------- Core ----------------------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//------------- Data Store ----------------------------------------//
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import * as fromAuth from './auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthDataStoreModule {}
