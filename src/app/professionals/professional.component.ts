import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfessionalsService } from './professionals.service';


@Component({
    selector: 'as-professional',
    templateUrl: 'app/professionals/professional.html'
})

export class ProfessionalComponent implements OnInit {
  private _professionalsService: ProfessionalsService;
  private _router: Router;
  private route: ActivatedRoute;
  private _professional: any;

  constructor( _activatedRoute: ActivatedRoute, professionalsService: ProfessionalsService, router: Router ) {
    this._professionalsService = professionalsService;
    this.route = _activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this._professionalsService.getProfessional(id)
      .subscribe(professionals => {
        for (let i = 0; i < professionals.length; i++) {
          if (professionals[i].id.$oid === id) {
            this._professional = professionals[i];
            break;
          }
        };
    });

    /*
    .subscribe(professional => {
      this._professional = professional;
    })
     */
  }

  public goBack(): void {
    this._router.navigate(['/professionals']);
  }
}
