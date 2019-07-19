import { NgModule } from '@angular/core';
import { HelloUserComponent } from './hello-user/hello-user';
import { RestaurantRatingComponent } from './restaurant-rating/restaurant-rating';

@NgModule({
	declarations: [
        HelloUserComponent,
        RestaurantRatingComponent
    ],
	imports: [],
	exports: [
        HelloUserComponent,
        RestaurantRatingComponent
    ]
})
export class ComponentsModule {}
