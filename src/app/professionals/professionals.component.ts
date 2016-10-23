import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from './professionals.service';

@Component({
    selector: 'as-professionals',
    templateUrl: 'app/professionals/professionals.html'
})
export class ProfessionalsComponent implements OnInit {
    private _professionalsService: ProfessionalsService;
    private _professionalsList: Array<any>;

    constructor(professionalsService: ProfessionalsService) {
        this._professionalsList = [];
        this._professionalsService = professionalsService;
    }

    public ngOnInit(): void {
        this._professionalsService.getProfessionnals().subscribe(response => {

        this._professionalsList = response;
        });
    }
}
