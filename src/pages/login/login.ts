import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from '../../pages/dashboard/dashboard';
import {SignupPage} from '../../pages/signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
  	this.navCtrl.setRoot(DashboardPage)
  }
  signIn(){
    this.navCtrl.setRoot(SignupPage)
  }

}
