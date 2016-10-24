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
var env_1 = require("../shared/constant/env");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var HttpService = (function () {
    function HttpService(http) {
        this._http = http;
        this._basicUrl = env_1.ENV.API_url;
    }
    HttpService.prototype.createAuthorizationHeader = function () {
        this._headers = new http_1.Headers();
        this._headers.append('Authorization', 'Basic ' + btoa(credentials_1.CREDENTIALS.hadrien.USER + ':' + credentials_1.CREDENTIALS.hadrien.PWD));
        this._headers.append('Content-Type', 'application/x-www-form-urlencoded');
    };
    HttpService.prototype.getProfessionnals = function () {
        this.createAuthorizationHeader();
        return this._http.get(this._basicUrl + 'professionals?page=1&format=json', { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HttpService.prototype.getProfessional = function (id) {
        this.createAuthorizationHeader();
        return this._http.get(this._basicUrl + 'professionals/' + id + '?&format=json', { headers: this._headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map