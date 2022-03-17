import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AnnonceType {
  OFFER = "OFFER",
  DEMAND = "DEMAND",
  QUESTION = "QUESTION"
}

export enum AnnonceStatus {
  PENDING = "PENDING",
  VALIDATED = "VALIDATED"
}



type AnnonceMetaData = {
  readOnlyFields;
}

export declare class Annonce {
  readonly id: string;
  readonly title: string;
  readonly text?: string;
  readonly contactName?: string;
  readonly contactEmail?: string;
  readonly contactPhone?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly deletedAt?: number;
  readonly photos?: (string | null)[];
  readonly type?: AnnonceType | keyof typeof AnnonceType;
  readonly location?: string;
  readonly status?: AnnonceStatus | keyof typeof AnnonceStatus;
  constructor(init: ModelInit<Annonce>);
  static copyOf(source: Annonce, mutator: (draft: MutableModel<Annonce>) => MutableModel<Annonce> | void): Annonce;
}