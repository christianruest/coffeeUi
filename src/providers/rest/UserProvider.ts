import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestProvider } from './RestProvider';
import { ObjectType } from './ObjectType';
import { User } from '../../models/User';

@Injectable()
export class UserProvider extends RestProvider {
    private OBJECTTYPE = ObjectType.USER;
    private user: User;


    constructor(public http: HttpClient) {
        super(http);
        console.log('UserProvider called');
    }

    public createUser(object: User) {
        console.log('creating user: ' + JSON.stringify(object));
        return new Promise (resolve => {
            this.createObject(this.OBJECTTYPE, object)
            .then(data => {
                resolve(data);
            }, err => {
                console.error(err);
            });
        });
    }

    public getUser(userId: string) {
        console.log('get User called with id: ' + userId);
        return new Promise (resolve => {
            this.getObject(this.OBJECTTYPE, userId)
            .then(data => {
                resolve(data);
            }, err => {
                console.error(err);
            });
        });
    }

}