import { Injectable } from '@angular/core';

@Injectable()

export class PartnersService {
    public partners = null;
    public partner_id = null;

    getId () {
        return this.partner_id;
    }
    setId (id) {
        this.partner_id = id;
    }
    der () {
        console.log(1);
    }
}