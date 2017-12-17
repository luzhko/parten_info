import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES_CONFIG } from './app-routing.module';

import { PartnersService } from './shared/services/partners.service';

import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent
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
