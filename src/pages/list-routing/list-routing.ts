import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-routing',
  templateUrl: 'list-routing.html',
})
export class ListRoutingPage {
	order;
  product;
  projects;
  support;
  constructor(public navCtrl: NavController, public navParams: NavParams){
  }
  ionViewDidLoad(){
    switch (this.navParams.get('page')){
      case "order":
        this.order = true;
        break;
      case "product":
        this.product = true;
        break;
      case "projects":
        this.projects = true;
        break;
      case "support":
        this.support = true;
        break;
      default:
        break;
    }
  }
  close(){
    this.navCtrl.pop();
  }
  orderData(){
    this.collectionData(true,false,false,false) ;
  }
  productData(){
    this.collectionData(false,true,false,false) 
  }
  projectsData(){
    this.collectionData(false,false,true,false) 
  }
  supportData(){
    this.collectionData(false,false,false,true) 
  }
  collectionData(order,product,projects,support){
    this.order=order;
    this.product=product;
    this.projects=projects;
    this.support=support;
  }

}
