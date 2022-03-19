import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AnnonceType {
  OFFER = "OFFER",
  DEMAND = "DEMAND",
  QUESTION = "QUESTION"
}

export enum AnnonceStatus {
  PENDING = "PENDING",
  VALIDATED = "VALIDATED",
  REFUSED = "REFUSED"
}



type AnnonceMetaData = {
  readOnlyFields;
}

type CommentMetaData = {
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
  readonly comments?: (Comment | null)[];
  constructor(init: ModelInit<Annonce>);
  static copyOf(source: Annonce, mutator: (draft: MutableModel<Annonce>) => MutableModel<Annonce> | void): Annonce;
}

export declare class Comment {
  readonly id: string;
  readonly title?: string;
  readonly text?: string;
  readonly author?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly deletedAt?: number;
  readonly annonceID: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}