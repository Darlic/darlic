import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IonicServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IonicServicesProvider {
	public database:any;
	public query:any;
	db:any;
	Apidata:any;
	slugs = [];
	dataset:any;
	AppkitProducts=[];
  constructor(public http: HttpClient) {
    console.log('Hello IonicServicesProvider Provider');
  }

}
