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
  }
  signup(){
    this.step ='sign';
    this.navCtrl.setRoot(SignupPage);
  }
  login(){
    this.step ='loginup';
    this.navCtrl.setRoot(LoginPage);
  }

}
