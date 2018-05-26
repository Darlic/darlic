import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from '../../pages/dashboard/dashboard';
import {SignupPage} from '../../pages/signup/signup';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginform:FormGroup;
  constructor(public fb:FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
  this.createLogin();
  }
  createLogin(){
    this.loginform=this.fb.group({
      Email:["",Validators.required],
      password:["",Validators.required],
     
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(data){
     if(!(data.valid)){
      console.log('not valid');
      this.loginform;
    }else{

    console.log(data.value);
    //this.navCtrl.setRoot(LoginPage);
  	this.navCtrl.setRoot(DashboardPage);
    }

  }
  signIn(){
    this.navCtrl.setRoot(SignupPage)
  }

}
