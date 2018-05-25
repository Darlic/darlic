import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from '../../pages/signup/signup';
import {LoginPage} from '../../pages/login/login';
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
   step:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  signup(){
    this.step ='step1';
    // this.navCtrl.setRoot(SignupPage);
  }
   login(){
    this.navCtrl.setRoot(LoginPage);
  }

}
