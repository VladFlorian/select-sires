//-------------- Core ---------------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//-------------- Data Store ---------------------------------//
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LogEffects } from './log.effects';
import * as fromLog from './log.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('log', fromLog.logReducer),
    EffectsModule.forFeature([LogEffects])
  ],
})
export class LogDataStoreModule {}
