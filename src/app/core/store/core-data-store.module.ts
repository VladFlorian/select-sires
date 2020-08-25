//-------------- Core -------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//-------------- Data Store -------------------------//
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './core.effects';
import * as fromCore from './core.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('core', fromCore.coreReducer),
    EffectsModule.forFeature([CoreEffects]),
  ],
})
export class CoreDataStoreModule {}
