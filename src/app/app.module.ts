import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicServicesProvider } from '../providers/ionic-services/ionic-services';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IonicHelperProvider } from '../providers/ionic-helper/ionic-helper';
import { Network } from '@ionic-native/network';
import {WelcomePage} from '../pages/welcome/welcome';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IonicServicesProvider,
    SQLite,
    IonicHelperProvider,
    Network
  ]
})
export class AppModule {}
