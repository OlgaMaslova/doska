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
    ModelSortDirection,
    UpdateAnnonceInput
} from './API.service';
import { deleteFromS3, getSignedFile } from './helpers.service';
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
        const annonces = (
            await this.API.AnnoncesByStatus(
                status,
                undefined,
                ModelSortDirection.DESC
            )
        ).items as ExtendedAnnonce[];
        if (annonces) {
            await Promise.all(
                annonces.map(async (annonce) => {
                    if (annonce.photos) {
                        annonce.coverPhoto = await getSignedFile(
                            annonce.photos[0]
                        );
                    }
                })
            );
            return annonces;
        }
        return null;
    }

    async getAnnonces(): Promise<ExtendedAnnonce[] | null> {
        const annonces = (await this.API.ListAnnonces())
            .items as ExtendedAnnonce[];
        if (annonces) {
            await Promise.all(
                annonces.map(async (annonce) => {
                    if (annonce.photos) {
                        annonce.coverPhoto = await getSignedFile(
                            annonce.photos[0]
                        );
                    }
                })
            );
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
            annonce.coverPhoto = await getSignedFile(annonce.photos[0]);
        }
        return annonce;
    }

    async createComment(input: CreateCommentInput): Promise<Comment> {
        return this.API.CreateComment(input);
    }

    async deleteAnnonce(annonce: Annonce): Promise<Annonce> {
        if (annonce.comments!.items && annonce.comments!.items.length > 0) {
            await Promise.all(
                annonce.comments!.items.map(async (comment) => {
                    await this.API.DeleteComment({ id: comment!.id });
                })
            );
        }
        if (annonce.photos && annonce.photos.length > 0) {
            await deleteFromS3(annonce.photos[0]);
        }
        return this.API.DeleteAnnonce({
            id: annonce.id
        });
    }
}
