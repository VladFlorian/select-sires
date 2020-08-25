//-------------- Core -------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from '../environments/environment';

//-------------- Firebase ----------------------------------------------------------//
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

//-------------- Data Store --------------------------------------------------------//
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './app.reducer';
//-------------- Ui Modules --------------------------------------------------------//
import { AngularMaterialUIModule } from './core/modules/angular-material-ui.module';

//-------------- Feature Modules ---------------------------------------------------//
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { LogModule } from './log/log.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    //--- CORE ---
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //--- FIREBASE ---
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    //--- DATE STORE ---
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // AngularFirestoreModule.enablePersistence(),// store data while offline
    //--- UI MODULES ---
    AngularMaterialUIModule,
    //--- FEATURE MODULES ---
    CoreModule,
    AuthModule,
    LogModule,
    UserModule,
    ProductModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
