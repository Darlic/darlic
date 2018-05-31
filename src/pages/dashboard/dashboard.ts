import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';
import {ListRoutingPage} from '../../pages/list-routing/list-routing';
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  constructor(public navCtrl: NavController, public navParams: NavParams){
  }
  ionViewDidLoad(){
  }
  order(){
  	this.navCtrl.push(ListRoutingPage,{'page':'order'})
  }
  Products(){
  	this.navCtrl.push(ListRoutingPage,{'page':'product'})
  }
  Projects(){
  	this.navCtrl.push(ListRoutingPage,{'page':'projects'})
  }
  Support(){
  	this.navCtrl.push(ListRoutingPage,{'page':'support'})
  }
}
