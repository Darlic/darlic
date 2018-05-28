import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { IonicServicesProvider } from '../../providers/ionic-services/ionic-services';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup:FormGroup;
  constructor(public http:HttpClient,public IonicProvider:IonicServicesProvider, public fb:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.createSignup();
    //this.createTable();
  }
  createTable(){
    return new Promise((resolve,reject)=>{
      let data=[];
      let table=['firstname','lastname','email','password'];
      for(let key in table){
        data.push(table[key]+ ' TEXT');
      }
     // this.IonicProvider.CreateTable('SignUp', data);
    })
  }
  createSignup() {
    this.signup=this.fb.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
     
    })
  }
  insertSignup(data){
    // console.log(data);
    // let col=[];
    // let val=[]
   return new Promise((resolve,reject)=>{
    //   for(let key in data){
    //     col.push(key);
    //     val.push(data[key]);
    //   }  
    //   this.IonicProvider.Insert("SignUp",col,val).then((rsult:any)=>{
    //     console.log("resul");
    //     this.navCtrl.setRoot(LoginPage);
    //   })
    console.log(data);
    data["api_key"]= '1254kijuyq';
    console.log(data);
    this.http.post('http://darlic.com/api/android/', data).subscribe((result:any)=>{
        console.log(result);
    })

    })
    
  }
  submit(signup){
    if(!(signup.valid)){
      console.log('not valid');
      this.signup;
    }else{
    console.log(signup.value);
    this.insertSignup(signup.value).then(()=>{
    })
    }
  }
  login(){
    this.navCtrl.setRoot(LoginPage); 
  }

}
