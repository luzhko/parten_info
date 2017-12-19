import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../../shared/services/partners.service';

@Component ({
    selector: 'app-partner-balance',
    templateUrl: './partner-balance.component.html',
    styleUrls: ['./partner-balance.component.css']
})

export class PartnerBalanceComponent implements OnInit{
    id: number;
    constructor (
        private partnersService: PartnersService
    ) {}

    ngOnInit () {
        this.id = this.partnersService.getId();
        console.log(1);
    }
}
