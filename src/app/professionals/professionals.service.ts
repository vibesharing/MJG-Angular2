import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProfessionalsService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

    public  createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' + btoa('hadrien:wewantUatMJG!EOTAF'));
    }

    public getProfessionnals(): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

            /*return this._http.get('https://dev.myjobglasses.com/professionals?page=1&format=json', {headers: headers})
        .map(response => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/

        return this._http.get('./app/professionals/pro.json')
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

    public getProfessional(id: any): any {
        return this._http.get('./app/professionals/pro.json')
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        /*
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

        return this._http.get('https://dev.myjobglasses.com/professionals/'+ id + '&format=json', {headers: headers})
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        */
     }
}
