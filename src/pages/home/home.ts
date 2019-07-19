import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/rest/RestaurantProvider'
import { Geolocation }  from '@ionic-native/geolocation/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private restaurants: any;
  searchText : String = "";
  lon: any;
  lat: any;
  uuid : any;

  constructor(
    public navCtrl: NavController, 
    public restProvider: RestaurantProvider, 
    public geo: Geolocation,
    public deviceId : UniqueDeviceID
  ) {
      this.deviceId.get()
        .then(data => this.uuid = data)
        .catch(err => console.error(err));
    }

  ngOnInit() {
    this.restProvider.getRestaurants()
    .then(
      data => this.restaurants = data,
      error => console.log(error)
    );

    this.geo.getCurrentPosition().then(pos => {
        this.lon = pos.coords.longitude;
        this.lat = pos.coords.latitude;
    }, err => {console.log(err)}
    );
  }

  searchRestaurants() {
    this.restProvider.searchRestaurants(this.searchText)
    .then(
      data => this.restaurants = data,
      error => console.log(error)
    );
  }


  restaurantSelected(restaurant) {
    this.navCtrl.push('ViewRestaurantPage',{restaurant: restaurant})
  }
}
