import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Partner } from '../shared/models/partner';

@Component ({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.css']
})

export class PartnersComponent implements OnInit {
    public viewProductLine: boolean = false;
    public partners: Partner[]
    constructor (
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit () {
        this.activatedRoute.data.subscribe((data: {partners: Partner[] }) => {
            this.partners = data.partners;
        });
        // console.log(this.partners);
    }

    viewCol () {
        this.viewProductLine = true;
    }

    viewLine () {
        this.viewProductLine = false;
    }

    search (data) {
        console.log(data);
    }
}