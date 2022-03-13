import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Annonce } from 'src/app/types.service';

@Component({
    selector: 'annonce-card',
    templateUrl: './annonce-card.component.html',
    styleUrls: ['./annonce-card.component.scss']
})
export class AnnonceCardComponent implements OnInit {
    @Input() annonce: Annonce;

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
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
    }

    ngOnInit(): void {
        this.annonce.coverPhoto = this.annonce.photos
            ? this.annonce.photos[0]
            : null;
    }
}
