import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderDetailPage} from '../../pages/order-detail/order-detail';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
	spinner:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ionViewDidLoad();
  }
  ionViewDidLoad(){
  	this.spinner=true;
    let eve=this;
    setTimeout(function(){
    	eve.spinner=false;
    	console.log('spinner flase');
    },600)						
  }
  detail(){
  	this.navCtrl.push(OrderDetailPage);
  }
}
