import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nav, Platform ,ToastController,AlertController} from 'ionic-angular';
import { Network } from '@ionic-native/network';
@Injectable()
export class IonicHelperProvider {

  constructor(private network: Network,private toastCtrl: ToastController,public alert:AlertController,public http: HttpClient) {
    console.log('Hello IonicHelperProvider Provider');
  }
  showAlert(hello,message){
  	let alert=this.alert.create({
	    title: hello,
	    subTitle: message,
	    buttons: ['ok']
	  });
	  alert.present();
  }
  presentToast(message,duration,position){
    let toast = this.toastCtrl.create({
      message: message,
       duration: duration,
      position: position,
      cssClass: "toastCss",
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  internet(){
  	return new Promise ((resolve,reject)=>{
  		if(this.network.onConnect().subscribe()){
        console.log(this.network.type);
		  	if (this.network.type === 'none') {
		  		this.showAlert('Disconnected !!','No Internet Connection');
            
				}else{
					//this.showAlert('Connected !!','You have an internet connection');	
          // resolve('yes connected');  
          resolve('connection connected') 
				}
	  	}
  	}) 
  }
  wifi(){
    return new Promise((resolve,reject)=>{
      if(this.network.onConnect().subscribe()){
        console.log(this.network.type);
        if(this.network.type === 'wifi'){
          this.showAlert('Wifi connected','you got a Wifi Connection'); 
          
          resolve("connection connected");
        }else{
          this.showAlert('Disconnected','Wifi Connection has been lost'); 
          resolve("connection lost"); 
        }
      }  
    })
	}

}
