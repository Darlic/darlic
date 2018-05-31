import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListRoutingPage } from './list-routing';

@NgModule({
  declarations: [
    ListRoutingPage,
  ],
  imports: [
    IonicPageModule.forChild(ListRoutingPage),
  ],
})
export class ListRoutingPageModule {}
