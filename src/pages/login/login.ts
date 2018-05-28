import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from '../../pages/dashboard/dashboard';
import {SignupPage} from '../../pages/signup/signup';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { IonicServicesProvider } from '../../providers/ionic-services/ionic-services';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginform:FormGroup;
  Error:any;
  constructor(public IonicProvider:IonicServicesProvider,public fb:FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
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
    this.conditionCheck(data.value).then(()=>{

    })
    //this.navCtrl.setRoot(LoginPage);
  //	this.navCtrl.setRoot(DashboardPage);
    }
  }
  conditionCheck(data){
    return new Promise((resolve,reject)=>{
     this.IonicProvider.MultipleSelectWhere("SignUp","Email","'"+data["Email"]+"'", "password" ,"'"+data['password']+"'").then((survey_meta:any)=>{
       console.log(survey_meta.rows.length);
       if(survey_meta.rows.length >= 1){
         console.log("exitst");
         this.navCtrl.setRoot(DashboardPage);
       }else{
         setTimeout(()=>{
            this.Error="dkjf";
         },400)
         this.Error='';
         console.log(this.Error);
           console.log("not exitst");
       }
      })
    })
  }
  signIn(){
    this.navCtrl.setRoot(SignupPage)
  }

}
