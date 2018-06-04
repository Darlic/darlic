import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ProjectDetailsPage} from '../../pages/project-details/project-details'
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
	userId;
  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    this.userId=localStorage.getItem("userId");
    console.log(this.userId);
    let formData=new FormData();
    formData.append('api_key','1254kijuyq');
    formData.append('action','websites');
    formData.append('userid',this.userId);
    this.http.post('http://darlic.com/api/android/', formData).subscribe((result:any)=>{
         console.log(result);
    })
  }
  detailPage(){
  	this.navCtrl.push(ProjectDetailsPage);
  }

}
