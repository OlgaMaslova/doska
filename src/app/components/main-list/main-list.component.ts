import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/annonce.service';
import { AnnonceStatus, AnnonceType } from 'src/app/API.service';
import { ExtendedAnnonce } from 'src/app/types.service';
import { Auth } from 'aws-amplify';

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

    isAdmin = false;

    constructor(private annonceService: AnnonceService) {}

    async ngOnInit() {
        try {
            await Auth.currentAuthenticatedUser().then((user) => {
                if (user) {
                    this.isAdmin = true;
                    this.getAnnonces();
                }
            });
        } catch (error) {
            this.getAnnonces();
        }
    }

    async getAnnonces() {
        let annonces = (await this.annonceService.getAnnoncesByStatus(
            AnnonceStatus.VALIDATED
        )) as ExtendedAnnonce[];
        if (this.isAdmin) {
            annonces =
                (await this.annonceService.getAnnonces()) as ExtendedAnnonce[];
        }
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
