import { Routes } from '@angular/router';

import { PartnersComponent } from './partners/partners.component';
import { PartnerSingleComponent } from './partner-single/partner-single.component';

import { PartnerBalanceComponent } from './partner-single/partner-balance/partner-balance.component';
import { PartnerMapComponent } from './partner-single/partner-map/partner-map.component';
import { PartnerReplenishComponent } from './partner-single/partner-replenish/partner-replenish.component';

export const ROUTES_CONFIG: Routes = [
    {path: '', component: PartnersComponent},
    { path: 'partner/:id', component: PartnerSingleComponent,
        children: [
            { path: 'balance', component: PartnerBalanceComponent },
            { path: 'map', component: PartnerMapComponent },
            { path: 'replenish', component: PartnerReplenishComponent }
        ]
    },
    {path: '**', redirectTo: '/'}
]