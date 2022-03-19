import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from 'src/app/annonce.service';
import { Annonce } from 'src/app/types.service';

@Component({
    selector: 'app-annonce-detail',
    templateUrl: './annonce-detail.component.html',
    styleUrls: ['./annonce-detail.component.scss']
})
export class AnnonceDetailComponent implements OnInit {
    annonceID: string;

    annonce: Annonce;

    constructor(
        private route: ActivatedRoute,
        private annonceService: AnnonceService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.annonceID = params.id;
                this.setAnnonce();
            }
        });
    }

    async setAnnonce() {
        await this.annonceService.getAnnonce(this.annonceID).then((annonce) => {
            this.annonce = annonce;
        });
    }

    onComment() {}
}
