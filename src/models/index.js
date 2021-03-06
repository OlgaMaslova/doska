// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AnnonceType = {
  "OFFER": "OFFER",
  "DEMAND": "DEMAND",
  "QUESTION": "QUESTION"
};

const AnnonceStatus = {
  "PENDING": "PENDING",
  "VALIDATED": "VALIDATED",
  "REFUSED": "REFUSED"
};

const { Annonce, Comment } = initSchema(schema);

export {
  Annonce,
  Comment,
  AnnonceType,
  AnnonceStatus
};