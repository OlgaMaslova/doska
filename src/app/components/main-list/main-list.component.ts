import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/annonce.service';
import { AnnonceType } from 'src/app/API.service';
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

    questions: Annonce[] = [];

    constructor(private annonceService: AnnonceService) {}

    ngOnInit(): void {
        this.getAnnonces();
    }

    async getAnnonces() {
        const annonces = (await this.annonceService.getAnnonces()) as Annonce[];
        this.annoncesOffer = annonces.filter(
            (annonce) => annonce.type === AnnonceType.OFFER
        );
        this.annoncesSeek = annonces.filter(
            (annonce) => annonce.type === AnnonceType.DEMAND
        );
        this.questions = annonces.filter(
            (annonce) => annonce.type === AnnonceType.QUESTION
        );
    }
}
