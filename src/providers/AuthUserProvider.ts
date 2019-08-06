import { Component } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { UserProvider } from './rest/UserProvider';

@Injectable()
export class AuthUserProvider {
    // user = {} as User;
    user : any;


    constructor(private afAuth: AngularFireAuth, private userProvider: UserProvider) {
        console.log('AuthUserProvider setup')
    }

    public login(emailAddress: string, password: string){
        try {
            this.afAuth.auth.signInWithEmailAndPassword(emailAddress, password)
            .then(
            () => {
                    this.afAuth.user.subscribe(data => {
                        this.user = this.userProvider.getUser(data.uid);
                        console.log('User logged in as: ' + this.user);
                    });
                }
            );
        } catch (e) {
            console.error(e);
        }
    }

    public register(emailAddress: string, password: string) {
        return new Promise (resolve => {
            this.afAuth.auth.createUserWithEmailAndPassword(emailAddress, password)
            .then(data => {
                resolve(data);
            }, err => {
                console.error(err);
            });
        });
    }

}

