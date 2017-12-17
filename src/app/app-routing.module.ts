import { Routes } from '@angular/router';

import { PartnersComponent } from './partners/partners.component';

export const ROUTES_CONFIG: Routes = [
    {path: '', component: PartnersComponent},
    {path: '**', redirectTo: '/'}
]