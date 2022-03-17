import { CreateAnnonceInput } from './API.service';

export type AWSType = {
    _deleted?: boolean | null;
    _lastChangedAt: number;
};

export type Annonce = {
    coverPhoto?: string | null | undefined;
} & CreateAnnonceInput &
    AWSType;
