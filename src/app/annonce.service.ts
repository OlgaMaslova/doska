/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { APIService, CreateAnnonceInput } from './API.service';
import { Annonce } from './types.service';

@Injectable({
    providedIn: 'root'
})
export class AnnonceService {
    constructor(private API: APIService) {}

    async createAnnonce(input: CreateAnnonceInput): Promise<Annonce> {
        return this.API.CreateAnnonce(input);
    }

    async getAnnonces(): Promise<Annonce[] | null> {
        const annonces = (await this.API.ListAnnonces()).items as Annonce[];
        if (annonces) {
            for (const annonce of annonces) {
                if (annonce.photos) {
                    [annonce.coverPhoto] = annonce.photos;
                }
            }
            return annonces;
        }
        return null;
    }
}
