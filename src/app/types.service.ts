import { Annonce } from './API.service';

export type AWSType = {
    _deleted?: boolean | null;
    _lastChangedAt: number;
};

export type ExtendedAnnonce = {
    coverPhoto?: string | null | undefined;
} & Annonce;
