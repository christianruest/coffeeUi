import { Component } from '@angular/core';
import { User } from "../../models/user";

/**
 * Generated class for the HelloUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hello-user',
  templateUrl: 'hello-user.html'
})
export class HelloUserComponent {

  public user : User;

  constructor() {  }

}
