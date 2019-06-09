import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/rest/RestaurantProvider'
/* import { Restaurant } from '../../providers/models/Restaurant';
import { Observable } from '../../../node_modules/rxjs/Observable'; */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private restaurants: any;
  searchText : String = "";

  constructor(public navCtrl: NavController, public restProvider: RestaurantProvider) {

  }

  ngOnInit() {
    this.restProvider.getRestaurants()
    .then(
      data => this.restaurants = data,
      error => console.log(error)
    );
  }

  searchRestaurants() {
    this.restProvider.searchRestaurants(this.searchText)
    .then(
      data => this.restaurants = data,
      error => console.log(error)
    );
  }


  restaurantSelected(id: number) {
    this.navCtrl.push('ViewRestaurantPage',{id: id})
  }
}
