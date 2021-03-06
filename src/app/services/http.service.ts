import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { CREDENTIALS } from '../shared/constant/credentials';
import { ENV } from '../shared/constant/env';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class HttpService {
    private _http: Http;
    private _headers: Headers;
    private _basicUrl: string;

    constructor(http: Http) {
        this._http = http;
        this._basicUrl = ENV.API_url;
    }

    public  createAuthorizationHeader() {
        this._headers = new Headers();
        this._headers.append('Authorization', 'Basic ' + btoa(CREDENTIALS.hadrien.USER + ':' + CREDENTIALS.hadrien.PWD));
        this._headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }



    public getProfessionnals(page?: number): Observable<any> {
        this.createAuthorizationHeader();
        console.log(page);
        let pagenumber = page ? page : 1;

        return this._http.get(this._basicUrl + 'professionals?page=' + pagenumber + '&format=json', {headers: this._headers})
        .map(response => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

    public getProfessional(id: any): any {
        this.createAuthorizationHeader();

        return this._http.get(this._basicUrl + 'professionals/' + id + '?&format=json', {headers: this._headers})
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }
}
