import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES_CONFIG } from './app-routing.module';

import { PartnersService } from './shared/services/partners.service';

import { PartnersComponent } from './partners/partners.component';
import { PartnerSingleComponent } from './partner-single/partner-single.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent,
    PartnerSingleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES_CONFIG)
  ],
  providers: [
    PartnersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
