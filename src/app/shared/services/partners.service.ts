import { Injectable } from '@angular/core';

@Injectable()

export class PartnersService {
    public partners = null;
    public partner_id = null;

    public getAllPartners () {
        return  [
            {
                lat: 1
            }
        ];
    }
    public getId () {
        return this.partner_id;
    }
    public setId (id) {
        this.partner_id = id;
    }
}