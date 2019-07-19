import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjectType } from './ObjectType';


export class RestProvider {
    private httpOptions = {
        headers: new HttpHeaders({
        'Context-Type': 'application/json'
        })
    }
    private baseUrl: string = "http://localhost:8080/api/";


    constructor(public http: HttpClient) {
        console.log('RestProvider setup')
    }

    public getObject(objectType : ObjectType, id: number) {
        var extension = this.transformObjectTypeToUrlExtension(objectType);
        return new Promise (resolve => {
            this.http.get(this.baseUrl + extension + id, this.httpOptions)
            .subscribe(data => {
                resolve(data);
              }, err => {
                console.error(err);
              });
        });
    }

    public getAllObjects(objectType : ObjectType) {
        var extension = this.transformObjectTypeToUrlExtension(objectType) + '/all';
        return new Promise(resolve => {
            this.http.get(this.baseUrl + extension, this.httpOptions)
            .subscribe(data => {
                resolve(data);
            }, err => {
                console.error(err);
            });
        });
    }

    public searchObjects(objectType: ObjectType, searchCriteria: any) {
        var extension = this.transformObjectTypeToUrlExtension(objectType) + '/search';
        return new Promise(resolve => {
            this.http.post(this.baseUrl + extension, searchCriteria, this.httpOptions)
            .subscribe(data => {
                resolve(data);
            }, err => {
                console.error(err);
            })
        })
    }

    public createObject(objectType: ObjectType, object: any) {
        var extension = this.transformObjectTypeToUrlExtension(objectType);
        return new Promise (resolve => {
            this.http.post(this.baseUrl + extension, object, this.httpOptions)
            .subscribe(data => {
                resolve(data);
            }, err => {
                console.error(err);
            })
        })
    }

    public transformObjectTypeToUrlExtension(objectType : ObjectType) {

        switch (objectType) {
            case ObjectType.RESTAURANT:
                return "restaurant/"
                break;

            case ObjectType.RESTAURANTRATING:
                return "restaurant/rating/"
                break;

            default:
                console.error('no URL defined for objectType' + objectType)
                break;
        }
    }
}