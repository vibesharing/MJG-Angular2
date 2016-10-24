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
var professionals_service_1 = require("./professionals.service");
var http_service_1 = require("../services/http.service");
var ProfessionalsComponent = (function () {
    function ProfessionalsComponent(professionalsService, httpService) {
        this._professionalsList = [];
        this._professionalsService = professionalsService;
        this._httpService = httpService;
    }
    ProfessionalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getProfessionnals().subscribe(function (response) {
            _this._professionalsList = response;
        });
    };
    return ProfessionalsComponent;
}());
ProfessionalsComponent = __decorate([
    core_1.Component({
        selector: 'as-professionals',
        templateUrl: 'app/professionals/professionals.html'
    }),
    __metadata("design:paramtypes", [professionals_service_1.ProfessionalsService, http_service_1.HttpService])
], ProfessionalsComponent);
exports.ProfessionalsComponent = ProfessionalsComponent;
//# sourceMappingURL=professionals.component.js.map