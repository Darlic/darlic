import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
	spinner:any
  constructor(public navCtrl: NavController, public navParams: NavParams){
  }
  ionViewDidLoad() {
    this.spinner=true;
    setTimeout(function(argument) {
     	 this.spinner=false;
    },200)
  }

}
