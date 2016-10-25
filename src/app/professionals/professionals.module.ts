import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProfessionalsComponent, ProfessionalComponent } from './index';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll/angular2-infinite-scroll';


@NgModule({
    declarations: [
        ProfessionalsComponent,
        ProfessionalComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule,
        InfiniteScrollModule,
        HttpModule
    ],
    exports: [
        ProfessionalsComponent,
        ProfessionalComponent
    ],
    providers: [
    ]
})
export class ProfessionalsModule {
}
