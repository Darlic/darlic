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
import {SignupPage} from '../pages/signup/signup';
import {LoginPage} from '../pages/login/login';
import {DashboardPage} from '../pages/dashboard/dashboard';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {ListRoutingPage} from '../pages/list-routing/list-routing';
import {OrderPage} from '../pages/order/order';
import {ProductsPage} from '../pages/products/products';
import {ProjectsPage}  from '../pages/projects/projects';
import {SupportPage} from '../pages/support/support';
import{ProjectDetailsPage} from '../pages/project-details/project-details'
import {OrderDetailPage} from '../pages/order-detail/order-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    DashboardPage,
    ListRoutingPage,
    OrderPage,
    ProductsPage,
    ProjectsPage,
    SupportPage,
    ProjectDetailsPage,
    OrderDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    DashboardPage,
    ListRoutingPage,
    OrderPage,
    ProductsPage,
    ProjectsPage,
    SupportPage,
    ProjectDetailsPage,
    OrderDetailPage
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
