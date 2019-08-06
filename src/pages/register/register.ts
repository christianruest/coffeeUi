import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthUserProvider } from '../../providers/AuthUserProvider';
import { UserProvider } from '../../providers/rest/UserProvider';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(private authUserProvider: AuthUserProvider, private userProvider: UserProvider, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(user) {
    try {
      this.authUserProvider.register(user.emailAddress, user.password)
      .then(
        () => {
          this.afAuth.user.subscribe(data => {
            this.user.id = data.uid;
            console.log(JSON.stringify(user));
            try {
              this.userProvider.createUser(user);
            } catch (e) {
              console.error(e);
            }
          });
        }
      );
    } catch (e) {
      console.error(e);
    }
  }

}
