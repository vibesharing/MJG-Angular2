import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { ProfessionalsModule } from './professionals/professionals.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        HomeModule,
        ProfessionalsModule,
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
