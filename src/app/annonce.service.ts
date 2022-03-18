/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
    AnnonceStatus,
    APIService,
    CreateAnnonceInput,
    UpdateAnnonceInput
} from './API.service';
import { Annonce } from './types.service';

@Injectable({
    providedIn: 'root'
})
export class AnnonceService {
    constructor(private API: APIService) {}

    async createAnnonce(input: CreateAnnonceInput): Promise<Annonce> {
        return this.API.CreateAnnonce(input);
    }

    async getAnnoncesByStatus(
        status: AnnonceStatus
    ): Promise<Annonce[] | null> {
        const annonces = (await this.API.AnnoncesByStatus(status))
            .items as Annonce[];
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

    async updateAnnonce(input: UpdateAnnonceInput): Promise<Annonce> {
        return this.API.UpdateAnnonce(input);
    }
}
