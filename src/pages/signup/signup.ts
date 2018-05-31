import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { IonicServicesProvider } from '../../providers/ionic-services/ionic-services';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup:FormGroup;
  constructor(private toastCtrl: ToastController,public http:HttpClient,public IonicProvider:IonicServicesProvider, public fb:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.createSignup();
  }
  createSignup(){
    this.signup=this.fb.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }
  insertSignup(data){
    return new Promise((resolve,reject)=>{
      let formData = new FormData;
      formData.append('email',data.email);
      formData.append('first_name',data.firstName);
      formData.append('last_name',data.lastName);
      formData.append('password',data.password);
      formData.append('api_key','1254kijuyq');
      formData.append('action','register');
      this.http.post('http://darlic.com/api/android/', formData).subscribe((result:any)=>{
        resolve(result);
        console.log(result.message);
        if(result.status != 'success'){
         
        }
      })
    })
  }
  presentToast(message,duration,position){
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  submit(signup){
    if(!(signup.valid)){
      console.log('not valid');
      this.signup;
    }else{
      this.insertSignup(signup.value).then((result)=>{
        console.log(result);
        this.navCtrl.setRoot(LoginPage); 
      })
    }
  }
  login(){
    this.navCtrl.setRoot(LoginPage); 
  }

}
