import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from './professionals.service';
import { HttpService } from '../services/http.service';



@Component({
    selector: 'as-professionals',
    templateUrl: 'app/professionals/professionals.html'
})
export class ProfessionalsComponent implements OnInit {
    private _professionalsService: ProfessionalsService;
    private _professionalsList: Array<any>;
    private _httpService: HttpService;

    constructor(professionalsService: ProfessionalsService, httpService: HttpService ) {
        this._professionalsList = [];
        this._professionalsService = professionalsService;
        this._httpService = httpService;
    }

    public ngOnInit(): void {
        this._httpService.getProfessionnals().subscribe(response => {
            this._professionalsList = response;
        });
    }

    public onScroll(): void {
        console.log('done');
    }
}
