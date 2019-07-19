import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewRestaurantPage } from './view-restaurant';
import { RestaurantRatingComponent } from '../../components/restaurant-rating/restaurant-rating';

@NgModule({
  declarations: [
    ViewRestaurantPage,
    RestaurantRatingComponent
  ],
  imports: [
    IonicPageModule.forChild(ViewRestaurantPage)
  ],
})
export class ViewRestaurantPageModule {}
