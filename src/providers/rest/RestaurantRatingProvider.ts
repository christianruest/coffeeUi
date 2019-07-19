import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestProvider } from './RestProvider';
import { ObjectType } from './ObjectType';
import { RestaurantRating } from '../../models/RestaurantRating';

@Injectable()
export class RestaurantRatingProvider extends RestProvider {
    private OBJECTTYPE = ObjectType.RESTAURANTRATING;


    constructor(public http: HttpClient) {
        super(http);
        console.log('RestaurantRatingProvider called');
    }

    public createRestaurantRating(object: RestaurantRating) {
        console.log('creating RestaurantRating: ' + object);
        return new Promise (resolve => {
            this.createObject(this.OBJECTTYPE, object)
            .then(data => {
                resolve(data);
            }, err => {
                console.error(err);
            });
        });
    }

}