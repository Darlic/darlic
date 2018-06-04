import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {WelcomePage} from '../pages/welcome/welcome';
import {DashboardPage} from '../pages/dashboard/dashboard';
import { IonicServicesProvider } from '../providers/ionic-services/ionic-services';
import {ListRoutingPage} from '../pages/list-routing/list-routing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor(public IonicProvider:IonicServicesProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }
  initializeApp(){
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.database();
    });
  }
  database(){
    this.IonicProvider.PlatformCheck("darlic").then(()=>{
      if(localStorage.getItem("userId") != undefined){
        this.rootPage=DashboardPage
      }else{
        this.rootPage = WelcomePage;
      }
      this.pages = [
        { title: 'home', component: DashboardPage },
        {title: 'list', component: ListRoutingPage }
      ];
    });
  }
  openPage(page){
    this.nav.setRoot(page.component);
  }
}
