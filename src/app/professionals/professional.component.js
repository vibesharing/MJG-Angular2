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
var router_1 = require("@angular/router");
var professionals_service_1 = require("./professionals.service");
var http_service_1 = require("../services/http.service");
var ProfessionalComponent = (function () {
    function ProfessionalComponent(_activatedRoute, professionalsService, router, httpService) {
        this._httpService = httpService;
        this._professionalsService = professionalsService;
        this.route = _activatedRoute;
        this._router = router;
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this._httpService.getProfessional(id).subscribe(function (professional) {
            console.log(professional);
            _this._professional = professional;
        });
    };
    ProfessionalComponent.prototype.goBack = function () {
        this._router.navigate(['/professionals']);
    };
    return ProfessionalComponent;
}());
ProfessionalComponent = __decorate([
    core_1.Component({
        selector: 'as-professional',
        templateUrl: 'app/professionals/professional.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, professionals_service_1.ProfessionalsService, router_1.Router, http_service_1.HttpService])
], ProfessionalComponent);
exports.ProfessionalComponent = ProfessionalComponent;
//# sourceMappingURL=professional.component.js.map