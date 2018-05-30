import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from '../../pages/dashboard/dashboard';
import {SignupPage} from '../../pages/signup/signup';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { IonicServicesProvider } from '../../providers/ionic-services/ionic-services';
import { HttpClient } from '@angular/common/http';
import { IonicHelperProvider } from '../../providers/ionic-helper/ionic-helper';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginform:FormGroup;
  Error:any;
  spinner:any
  constructor(public helper:IonicHelperProvider,public IonicProvider:IonicServicesProvider,public http:HttpClient, public fb:FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
  this.createLogin();
  this.spinner=false;
  }
  createLogin(){
    this.loginform=this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad LoginPage');
  }
  login(data){
    if(!(data.valid)){
      console.log('not valid');
      this.loginform;
    }else{
     this.spinner=true;
    this.conditionCheck(data.value).then((result:any)=>{
      console.log(result);
      this.navCtrl.setRoot(DashboardPage);
    })
    }
  }
  conditionCheck(data){
    return new Promise((resolve,reject)=>{
      let formData=new FormData();
      formData.append('email', data.email)
      formData.append('password',data.password);
      formData.append('api_key','1254kijuyq');
      formData.append('action','login');
      this.http.post('http://darlic.com/api/android/', formData).subscribe((result:any)=>{
         this.spinner=false;
        this.helper.presentToast(result.message,1000,'top');
        if(result.status == 'success'){
          resolve(result);
        }
      })
    })
  }
  signIn(){
    this.navCtrl.setRoot(SignupPage)
  }

}
