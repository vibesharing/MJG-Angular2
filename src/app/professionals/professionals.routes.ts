import { Routes } from '@angular/router';

import { ProfessionalsComponent } from './professionals.component';
import { ProfessionalComponent } from './professional.component';

export const ProfessionalsRoutes: Routes = [
  { path: 'professionals', component: ProfessionalsComponent },
  { path: 'professional/:id', component: ProfessionalComponent }
];
