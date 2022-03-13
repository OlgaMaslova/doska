// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AnnonceType = {
  "OFFER": "OFFER",
  "DEMAND": "DEMAND"
};

const { Annonce } = initSchema(schema);

export {
  Annonce,
  AnnonceType
};