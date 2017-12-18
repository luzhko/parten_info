import { Routes } from '@angular/router';

import { PartnersComponent } from './partners/partners.component';
import { PartnerSingleComponent } from './partner-single/partner-single.component';

export const ROUTES_CONFIG: Routes = [
    {path: '', component: PartnersComponent},
    { path: 'partner/:id', component: PartnerSingleComponent},
    {path: '**', redirectTo: '/'}
]