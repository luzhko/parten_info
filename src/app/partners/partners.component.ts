import { Component } from '@angular/core';

@Component ({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.css']
})

export class PartnersComponent {
    public viewProductLine: boolean = false;
    constructor () {}

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