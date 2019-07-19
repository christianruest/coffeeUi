import { Component } from '@angular/core';
import { RestaurantRating } from '../../models/RestaurantRating';
import { Restaurant } from '../../models/Restaurant';
import { AngularFireAuth } from '@angular/fire/auth';
import { RestaurantRatingProvider } from '../../providers/rest/RestaurantRatingProvider';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'restaurant-rating',
  templateUrl: 'restaurant-rating.html'
})

export class RestaurantRatingComponent {
  restaurantRating = {} as RestaurantRating;
  restaurant = Restaurant;

  constructor( 
    private afAuth : AngularFireAuth,
    private restRatingProvider : RestaurantRatingProvider,
    public navParams: NavParams
  ) {
    try {
      this.afAuth.authState.subscribe(data => this.restaurantRating.userId = data.uid);
    } catch (e) {
      console.error(e);
    }
    

    this.restaurant = this.navParams.get('restaurant');
    this.restaurantRating.restaurantId = this.restaurant.id;
    

  }

  submitRating(restaurantRating) {
    console.log('This is the rating: ' + 'rating: ' + restaurantRating.rating + ' comment: ' +  restaurantRating.comment + ' restaurantId: ' +  restaurantRating.restaurantId + ' userId: ' +  restaurantRating.userId);
    this.restRatingProvider.createRestaurantRating(restaurantRating);
  }

}
