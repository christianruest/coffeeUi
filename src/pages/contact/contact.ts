import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public userLoggedIn : boolean = false;
  public loggedInUser : any;
  user = {} as User;
  

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  async login(user) {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(
        () => {
          this.afAuth.authState.subscribe(data => this.loggedInUser = data);
          console.log("User logged in as " + this.loggedInUser);
          this.isUserLoggedIn();
        }
      );

      // this.afAuth.authState.subscribe(data => this.loggedInUser = data);
      // console.log(this.loggedInUser);
      // this.isUserLoggedIn();

    } catch (e) {
      console.error(e);
    }
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
