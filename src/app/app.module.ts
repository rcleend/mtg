import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
  ],
  tosUrl: '/pages/terms',
  privacyPolicyUrl: '/pages/privacy',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SocialSharing,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
