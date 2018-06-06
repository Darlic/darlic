import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderDetailPage} from '../../pages/order-detail/order-detail';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad(){
  }
  detail(){
  	this.navCtrl.push(OrderDetailPage);
  }
}
