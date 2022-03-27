import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AnnonceService } from 'src/app/annonce.service';
import { AnnonceStatus } from 'src/app/API.service';
import { ExtendedAnnonce } from 'src/app/types.service';

@Component({
    selector: 'annonce-card',
    templateUrl: './annonce-card.component.html',
    styleUrls: ['./annonce-card.component.scss']
})
export class AnnonceCardComponent implements OnInit {
    @Input() annonce: ExtendedAnnonce;

    @Input() isAdmin: boolean = false;

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private annonceService: AnnonceService
    ) {
        this.matIconRegistry.addSvgIcon(
            `phone`,
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '../../../assets/icons/phone_black_24dp.svg'
            )
        );
        this.matIconRegistry.addSvgIcon(
            `email`,
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '../../../assets/icons/alternate_email_black_24dp.svg'
            )
        );
        this.matIconRegistry.addSvgIcon(
            `person`,
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '../../../assets/icons/perm_identity_black_24dp.svg'
            )
        );
        this.matIconRegistry.addSvgIcon(
            `place`,
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '../../../assets/icons/place_black_24dp.svg'
            )
        );
        this.matIconRegistry.addSvgIcon(
            `comment`,
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '../../../assets/icons/chat_bubble_outline_black_24dp.svg'
            )
        );
    }

    async ngOnInit() {}

    async onValidate() {
        this.annonce = await this.annonceService.updateAnnonce({
            id: this.annonce.id!,
            status: AnnonceStatus.VALIDATED
        });
    }

    async onRefuse() {
        this.annonce = await this.annonceService.updateAnnonce({
            id: this.annonce.id!,
            status: AnnonceStatus.REFUSED
        });
    }

    async onDelete() {
        await this.annonceService.deleteAnnonce(this.annonce);
    }
}
