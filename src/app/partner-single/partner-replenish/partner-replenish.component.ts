import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../../shared/services/partners.service';

@Component ({
    selector: 'app-partner-replenish',
    templateUrl: './partner-replenish.component.html',
    styleUrls: ['./partner-replenish.component.css']
})

export class PartnerReplenishComponent implements OnInit {
    id: number;
    constructor (
        private partnersService: PartnersService
    ) {}

    ngOnInit () {
        this.id = this.partnersService.getId();
        console.log(1);
    }
}