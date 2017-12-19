import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES_CONFIG } from './app-routing.module';

import { PartnersService } from './shared/services/partners.service';

import { PartnersComponent } from './partners/partners.component';
import { PartnerSingleComponent } from './partner-single/partner-single.component';
import { PartnerBalanceComponent } from './partner-single/partner-balance/partner-balance.component';
import { PartnerMapComponent } from './partner-single/partner-map/partner-map.component';
import { PartnerReplenishComponent } from './partner-single/partner-replenish/partner-replenish.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent,
    PartnerSingleComponent,
    PartnerBalanceComponent,
    PartnerMapComponent,
    PartnerReplenishComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES_CONFIG),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBli2JPeExUAEe4ScMoXyVdcs-BVTnqoX8'
    })
  ],
  providers: [
    PartnersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
