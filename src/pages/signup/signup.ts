import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup:FormGroup;
  constructor(public fb:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.createSignup();
  }
  createSignup() {
    this.signup=this.fb.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      Email:["",Validators.required],
      password:["",Validators.required],
     
    })
  }
  submit(signup){
    if(!(signup.valid)){
      console.log('not valid');
      this.signup;
    }else{
    console.log(signup.value);
  	this.navCtrl.setRoot(LoginPage);
    }
  }
  
  login(){
     this.navCtrl.setRoot(LoginPage); 
  }

}
