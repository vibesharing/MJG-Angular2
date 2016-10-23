import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProfessionalsComponent, ProfessionalComponent, ProfessionalsService  } from './index';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        ProfessionalsComponent,
        ProfessionalComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule,
        HttpModule
    ],
    exports: [
        ProfessionalsComponent,
        ProfessionalComponent
    ],
    providers: [
        ProfessionalsService
    ]
})
export class ProfessionalsModule {
}
