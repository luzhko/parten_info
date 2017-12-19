import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../../shared/services/partners.service';
import { MaekerInterface } from '../../shared/model/marker';

@Component ({
    selector: 'app-partner-map',
    templateUrl: './partner-map.component.html',
    styleUrls: ['./partner-map.component.css']
})

export class PartnerMapComponent implements OnInit {
    id: number;
    // google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    constructor (
        private partnersService: PartnersService
    ) {}

    markers: MaekerInterface[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            icon: '../assets/img/partner-logo.png'
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            icon: '../assets/img/partner-logo.png'
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            icon: '../assets/img/partner-logo.png'
        },
    ];

    ngOnInit () {
        this.id = this.partnersService.getId();
        console.log(1);
    }
}