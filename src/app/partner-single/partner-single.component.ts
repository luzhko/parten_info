import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PartnersService } from '../shared/services/partners.service';

@Component ({
    selector: 'app-partner-single',
    templateUrl: './partner-single.component.html',
    styleUrls: ['./partner-single.component.css']
})

export class PartnerSingleComponent implements OnInit {

    constructor (
        private activatedRoute: ActivatedRoute,
        private partnersService: PartnersService
    ){}

    ngOnInit () {
        // this.activatedRoute.paramMap.forEach( (params: Params) => {
        //     let id = +params.get("id");
        //     console.log(params);
        // });
        this.activatedRoute.params.subscribe( (params: Params) => {
            this.partnersService.setId(+params.id);
        });
    }
}