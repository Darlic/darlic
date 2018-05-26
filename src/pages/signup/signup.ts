import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
   
  }
  login(){
  	this.navCtrl.setRoot(LoginPage);
  }

}
