import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ViewRestaurantPage } from './view-restaurant';

@NgModule({
  declarations: [
    ViewRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewRestaurantPage),
  ],
})
export class ViewRestaurantPageModule {}
