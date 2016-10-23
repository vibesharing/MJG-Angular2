import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ProfessionalsRoutes } from './professionals/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...ProfessionalsRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
