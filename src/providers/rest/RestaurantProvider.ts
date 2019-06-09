import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';

//fields
const httpOptions = {
  headers: new HttpHeaders({
    'Context-Type': 'application/json'
  })
}

//define
var searchText : String = "";
var searchCriteria = {
  searchCriteria: [{
    key: "searchText",
    operation: ":",
    value: searchText
  }]
}

@Injectable()
export class RestaurantProvider {
  private baseUrl: string = "http://localhost:8080/api/restaurant/";

  constructor(public http: HttpClient) {
    console.log('RestaurantProvider called');
  }

  public getRestaurant(id: number) {
      console.log('getRestaurant by ID: ' + id);
      return new Promise (resolve => {
        this.http.get<Restaurant>(this.baseUrl + id, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }

  public getRestaurants() {
    console.log('getRestaurants called');
    return new Promise (resolve => {
      this.http.get(this.baseUrl + 'all', httpOptions)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public searchRestaurants(searchText: String) {
    console.log('searchRestaurant with text: ' + searchText);

    searchCriteria.searchCriteria[0].value = searchText;
     
    console.log(searchCriteria);

    return new Promise (resolve => {
      this.http.post(this.baseUrl + 'search', searchCriteria, httpOptions)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
