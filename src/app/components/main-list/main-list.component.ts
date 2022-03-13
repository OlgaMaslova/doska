import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/types.service';
import mock from 'src/assets/annonces.json';

@Component({
    selector: 'app-main-list',
    templateUrl: './main-list.component.html',
    styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
    annonces: Annonce[] = mock;

    annoncesSeek: Annonce[] = [];

    annoncesOffer: Annonce[] = [];

    constructor() {}

    ngOnInit(): void {
        this.annoncesOffer = this.annonces.filter(
            (annonce) => annonce.type === 'OFFER'
        );
        this.annoncesSeek = this.annonces.filter(
            (annonce) => annonce.type === 'SEEK'
        );
    }
}
