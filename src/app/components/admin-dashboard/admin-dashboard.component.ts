import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/annonce.service';
import { AnnonceStatus } from 'src/app/API.service';
import { Annonce } from 'src/app/types.service';
import { Auth } from 'aws-amplify';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
    annonces: Annonce[];

    constructor(
        private annonceService: AnnonceService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getAnnonces();
    }

    async getAnnonces() {
        this.annonces = (await this.annonceService.getAnnoncesByStatus(
            AnnonceStatus.PENDING
        )) as Annonce[];
    }

    async signOut() {
        await Auth.signOut();
        this.router.navigate(['/']);
    }
}
