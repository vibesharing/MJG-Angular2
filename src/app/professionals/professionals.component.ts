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
    private _page: number;
    private _showLoading: boolean;

    constructor(professionalsService: ProfessionalsService, httpService: HttpService ) {
        this._professionalsList = [];
        this._professionalsService = professionalsService;
        this._httpService = httpService;

    }

    public ngOnInit(): void {
        this.toggleLoadingInformation(true);

        this._httpService.getProfessionnals().subscribe(response => {
            this._professionalsList = response;
            this._page = 2;
            this.toggleLoadingInformation(false);
        });
    }

    public loadMore(): void {
        this.toggleLoadingInformation(true);
        this._httpService.getProfessionnals(this._page).subscribe(response => {
            console.log(response);
            setTimeout(() => {
                this._professionalsList = this._professionalsList.concat(response);

                this.toggleLoadingInformation(false);
            }, 1000);
        });
        this._page += 1;
    }

    public toggleLoadingInformation(isLoading: boolean): void {
        this._showLoading = isLoading;
    }
}
