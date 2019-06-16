import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/rest/RestaurantProvider'


@IonicPage()
@Component({
  selector: 'page-view-restaurant',
  templateUrl: 'view-restaurant.html',
})
export class ViewRestaurantPage {
  private restaurant: any = null;
  private coffees: any;
  private id: number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider : RestaurantProvider) {
    

  }

  ngOnInit() {

    // this.id = this.navParams.get('id');
    this.restaurant = this.navParams.get('restaurant');
    
    if(!this.restaurant) {
      this.navCtrl.goToRoot();
    }

    // if(!this.id) {
    //   console.log('pushing back to HomePage');
    //   this.navCtrl.goToRoot();
    // } else {
    //   console.log('loading the restaurant');
    //   this.restProvider.getRestaurant(this.id)
    //   .then( 
    //     data => this.restaurant = data,
    //     error => console.log(error)
    //   );
    // }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRestaurantPage');
  }

}
