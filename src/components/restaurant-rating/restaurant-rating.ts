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
  restaurant : Restaurant;
  starRatings : number[] = [1,2,3,4,5];

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
    if (this.restaurant && this.restaurant.id != null) {
      this.restaurantRating.restaurantId = this.restaurant.id;
    }
  }

  submitRating(restaurantRating) {
    console.log('This is the rating: ' + 'rating: ' + restaurantRating.rating + ' comment: ' +  restaurantRating.comment + ' restaurantId: ' +  this.restaurantRating.restaurantId + ' userId: ' +  restaurantRating.userId);
    this.restRatingProvider.createRestaurantRating(restaurantRating);
  }

  setRating(rating: number) {
    this.restaurantRating.rating = rating;
    console.log('Rating set to: ' + rating);
  }

  name(displayRating: number) {
    if (this.restaurantRating.rating && displayRating <= this.restaurantRating.rating) {
      return "star"
    } else {
      return "star-outline"
    };
  }
}
