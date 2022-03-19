import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/annonce.service';
import { AnnonceStatus, AnnonceType } from 'src/app/API.service';
import { ExtendedAnnonce } from 'src/app/types.service';

@Component({
    selector: 'app-main-list',
    templateUrl: './main-list.component.html',
    styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
    annonces: ExtendedAnnonce[] = [];

    annoncesSeek: ExtendedAnnonce[] = [];

    annoncesOffer: ExtendedAnnonce[] = [];

    questions: ExtendedAnnonce[] = [];

    constructor(private annonceService: AnnonceService) {}

    ngOnInit(): void {
        this.getAnnonces();
    }

    async getAnnonces() {
        const annonces = (await this.annonceService.getAnnoncesByStatus(
            AnnonceStatus.VALIDATED
        )) as ExtendedAnnonce[];
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
