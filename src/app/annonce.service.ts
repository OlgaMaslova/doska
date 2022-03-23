/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
    Annonce,
    AnnonceStatus,
    APIService,
    Comment,
    CreateAnnonceInput,
    CreateCommentInput,
    UpdateAnnonceInput
} from './API.service';
import { ExtendedAnnonce } from './types.service';

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
    ): Promise<ExtendedAnnonce[] | null> {
        const annonces = (await this.API.AnnoncesByStatus(status))
            .items as ExtendedAnnonce[];
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

    async getAnnonce(id: string): Promise<ExtendedAnnonce> {
        const annonce = (await this.API.GetAnnonce(id)) as ExtendedAnnonce;
        if (annonce.photos) {
            [annonce.coverPhoto] = annonce.photos;
        }
        return annonce;
    }

    async createComment(input: CreateCommentInput): Promise<Comment> {
        return this.API.CreateComment(input);
    }

    async deleteAnnonce(annonce: Annonce): Promise<Annonce> {
        return this.API.DeleteAnnonce({
            id: annonce.id
        });
    }
}
