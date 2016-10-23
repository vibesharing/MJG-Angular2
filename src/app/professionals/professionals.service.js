"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var credentials_1 = require("../shared/constant/credentials");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ProfessionalsService = (function () {
    function ProfessionalsService(http) {
        this._http = http;
    }
    ProfessionalsService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' + btoa(credentials_1.CREDENTIALS.hadrien.USER + ':' + credentials_1.CREDENTIALS.hadrien.PWD));
    };
    ProfessionalsService.prototype.getProfessionnals = function () {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        /*return this._http.get('https://dev.myjobglasses.com/professionals?page=1&format=json', {headers: headers})
        .map(response => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
        return this._http.get('./app/professionals/pro.json')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ProfessionalsService.prototype.getProfessional = function (id) {
        return this._http.get('./app/professionals/pro.json')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        /*
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

        return this._http.get('https://dev.myjobglasses.com/professionals/'+ id + '&format=json', {headers: headers})
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        */
    };
    return ProfessionalsService;
}());
ProfessionalsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfessionalsService);
exports.ProfessionalsService = ProfessionalsService;
//# sourceMappingURL=professionals.service.js.map