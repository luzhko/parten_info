import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Partner } from '../models/partner';
import { PartnersService } from '../../shared/services/partners.service';

@Injectable()
export class PartnerResolve implements Resolve<Partner[]> {

    constructor(
        private partnersService: PartnersService
    ) {}

    resolve() {
        return this.partnersService.getAllPartners();
    }

}