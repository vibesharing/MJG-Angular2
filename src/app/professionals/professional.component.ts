import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfessionalsService } from './professionals.service';
import { HttpService } from '../services/http.service';


@Component({
    selector: 'as-professional',
    templateUrl: 'app/professionals/professional.html'
})

export class ProfessionalComponent implements OnInit {
  private _professionalsService: ProfessionalsService;
  private _httpService: HttpService;
  private _router: Router;
  private route: ActivatedRoute;
  private _professional: any;

  constructor( _activatedRoute: ActivatedRoute, professionalsService: ProfessionalsService, router: Router, httpService: HttpService ) {
    this._httpService = httpService;
    this._professionalsService = professionalsService;
    this.route = _activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];

    this._httpService.getProfessional(id).subscribe(professional => {
      this._professional = professional;
    });
  }

  public goBack(): void {
    this._router.navigate(['/professionals']);
  }
}
