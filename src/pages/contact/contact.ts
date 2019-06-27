import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../providers/models/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  async login(user) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }

  register() {
    //TODO: create RegisterPage
    this.navCtrl.push('RegisterPage');
  }

}
