import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/rest/RestaurantProvider';
import { RestaurantRatingProvider } from '../../providers/rest/RestaurantRatingProvider';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-view-restaurant',
  templateUrl: 'view-restaurant.html',
})
export class ViewRestaurantPage {
  private restaurant: any = null;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public restProvider : RestaurantProvider) {
    

  }

  ngOnInit() {
    // this.id = this.navParams.get('id');
    this.restaurant = this.navParams.get('restaurant');
    
    this.checkIfRestaurantExistsAndPopToHome();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRestaurantPage');
  }

  hasCoffeeList() {
    this.checkIfRestaurantExistsAndPopToHome();
    if(this.restaurant && this.restaurant.restCoffeeModels[0]) {
      return true;
    } else {
      return false;
    }
  }

  checkIfRestaurantExistsAndPopToHome() {
    if(!this.restaurant) {
      console.log('popping back to HomePage');
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }
  }
}
