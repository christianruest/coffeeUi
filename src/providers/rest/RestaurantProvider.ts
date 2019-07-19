import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestProvider } from './RestProvider';
import { ObjectType } from './ObjectType';


@Injectable()
export class RestaurantProvider extends RestProvider {
  private OBJECTTYPE = ObjectType.RESTAURANT;
  private searchText : String = "";
  private searchCriteria = {
    searchCriteria: [{
      key: "searchText",
      operation: ":",
      value: this.searchText
    }]
  }

  constructor(public http: HttpClient) {
    super(http);
    console.log('RestaurantProvider called');
  }

  public getRestaurant(id: number) {
    console.log('getRestaurant by ID: ' + id);
    return new Promise (resolve => {
      this.getObject(this.OBJECTTYPE, id)
      .then(data => {
        resolve(data);
      }, err => {
        console.error(err);
      });
    });
  }

  public getRestaurants() {
    console.log('getRestaurants called');
    return new Promise (resolve => {
      this.getAllObjects(this.OBJECTTYPE)
      .then(data => {
        resolve(data);
      }, err => {
        console.error(err);
      });
    });
  }

  public searchRestaurants(searchText: String) {
    console.log('searchRestaurant with text: ' + searchText);
    this.searchCriteria.searchCriteria[0].value = searchText;
    console.log(this.searchCriteria);
    return new Promise (resolve => {
      this.searchObjects(this.OBJECTTYPE, this.searchCriteria)
      .then(data => {
        resolve(data);
      }, err => {
        console.error(err);
      });
    });
  }

}
