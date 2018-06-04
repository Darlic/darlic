import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import{ProjectDetailsPage} from '../../pages/project-details/project-details'
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
	userId;
  product:any;
  productLength:any;
  loader:any;
  constructor(public loaderCtrl : LoadingController,public http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.ionViewDidLoad();
  }
 
  ionViewDidLoad() {
    this.loader = this.loaderCtrl.create({
      content:'Verifying Your Details',
    });
    this.loader.present(); 
    this.userId=localStorage.getItem("userId");
    let formData=new FormData();
    formData.append('api_key','1254kijuyq');
    formData.append('action','websites');
    formData.append('userid',this.userId);
    this.http.post('http://darlic.com/api/android/', formData).subscribe((result:any)=>{
      this.product=result.data.user_sites;
      this.productLength=result.data.user_sites.length;
      this.loader.dismiss();
      console.log(this.product);
    });
  }
  detailPage(details){
  	this.navCtrl.push(ProjectDetailsPage,{'details': details});
  }

}
