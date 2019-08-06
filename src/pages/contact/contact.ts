import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { LoginCredentials } from '../../models/LoginCredentials';
import { AuthUserProvider } from '../../providers/AuthUserProvider';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public userLoggedIn : boolean = false;
  public loggedInUser : any;
  user = {} as User;
  loginCredentials = {} as LoginCredentials;
  

  constructor(private authUserProvider: AuthUserProvider, public navCtrl: NavController) {

  }

  async login(loginCredentials) {
    this.authUserProvider.login(loginCredentials.email, loginCredentials.password);
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  public isUserLoggedIn() {
    if(this.loggedInUser) {
      console.log("User is logged in");
      this.userLoggedIn = true;
    } else {
      console.log("no user is logged in");
      this.userLoggedIn = false;
    }
  }

}
