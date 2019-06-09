import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/rest/RestaurantProvider'


@IonicPage()
@Component({
  selector: 'page-view-restaurant',
  templateUrl: 'view-restaurant.html',
})
export class ViewRestaurantPage {
  private restaurant: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider : RestaurantProvider) {
    console.log(this.navParams.get('id'));
  }

  ngOnInit() {
    this.restProvider.getRestaurant(this.navParams.get('id'))
    .then( 
      data => this.restaurant = data,
      error => console.log(error)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRestaurantPage');
  }

}
