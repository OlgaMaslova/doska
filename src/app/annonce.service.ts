/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { AnnonceType, Annonce } from 'src/models';

@Injectable({
    providedIn: 'root'
})
export class AnnonceService {
    constructor() {}

    async createAnnonce() {
        const annonce = await DataStore.save(
            new Annonce({
                title: 'Lorem ipsum dolor sit amet',
                text: 'Lorem ipsum dolor sit amet',
                contactName: 'Lorem ipsum dolor sit amet',
                contactEmail: 'Lorem ipsum dolor sit amet',
                contactPhone: 'Lorem ipsum dolor sit amet',
                type: AnnonceType.OFFER
            })
        );
        console.log(annonce);
    }
}
