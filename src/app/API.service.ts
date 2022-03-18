/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateAnnonce: OnCreateAnnonceSubscription;
  onUpdateAnnonce: OnUpdateAnnonceSubscription;
  onDeleteAnnonce: OnDeleteAnnonceSubscription;
};

export type CreateAnnonceInput = {
  id?: string | null;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version?: number | null;
};

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

export type ModelAnnonceConditionInput = {
  title?: ModelStringInput | null;
  text?: ModelStringInput | null;
  contactName?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  contactPhone?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  deletedAt?: ModelIntInput | null;
  photos?: ModelStringInput | null;
  type?: ModelAnnonceTypeInput | null;
  location?: ModelStringInput | null;
  status?: ModelAnnonceStatusInput | null;
  and?: Array<ModelAnnonceConditionInput | null> | null;
  or?: Array<ModelAnnonceConditionInput | null> | null;
  not?: ModelAnnonceConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelAnnonceTypeInput = {
  eq?: AnnonceType | null;
  ne?: AnnonceType | null;
};

export type ModelAnnonceStatusInput = {
  eq?: AnnonceStatus | null;
  ne?: AnnonceStatus | null;
};

export type Annonce = {
  __typename: "Annonce";
  id: string;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAnnonceInput = {
  id: string;
  title?: string | null;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version?: number | null;
};

export type DeleteAnnonceInput = {
  id: string;
  _version?: number | null;
};

export type ModelAnnonceFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  text?: ModelStringInput | null;
  contactName?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  contactPhone?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  deletedAt?: ModelIntInput | null;
  photos?: ModelStringInput | null;
  type?: ModelAnnonceTypeInput | null;
  location?: ModelStringInput | null;
  status?: ModelAnnonceStatusInput | null;
  and?: Array<ModelAnnonceFilterInput | null> | null;
  or?: Array<ModelAnnonceFilterInput | null> | null;
  not?: ModelAnnonceFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelAnnonceConnection = {
  __typename: "ModelAnnonceConnection";
  items: Array<Annonce | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateAnnonceMutation = {
  __typename: "Annonce";
  id: string;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAnnonceMutation = {
  __typename: "Annonce";
  id: string;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteAnnonceMutation = {
  __typename: "Annonce";
  id: string;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetAnnonceQuery = {
  __typename: "Annonce";
  id: string;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListAnnoncesQuery = {
  __typename: "ModelAnnonceConnection";
  items: Array<{
    __typename: "Annonce";
    id: string;
    title: string;
    text?: string | null;
    contactName?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deletedAt?: number | null;
    photos?: Array<string | null> | null;
    type?: AnnonceType | null;
    location?: string | null;
    status?: AnnonceStatus | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAnnoncesQuery = {
  __typename: "ModelAnnonceConnection";
  items: Array<{
    __typename: "Annonce";
    id: string;
    title: string;
    text?: string | null;
    contactName?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deletedAt?: number | null;
    photos?: Array<string | null> | null;
    type?: AnnonceType | null;
    location?: string | null;
    status?: AnnonceStatus | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type AnnoncesByStatusQuery = {
  __typename: "ModelAnnonceConnection";
  items: Array<{
    __typename: "Annonce";
    id: string;
    title: string;
    text?: string | null;
    contactName?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deletedAt?: number | null;
    photos?: Array<string | null> | null;
    type?: AnnonceType | null;
    location?: string | null;
    status?: AnnonceStatus | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateAnnonceSubscription = {
  __typename: "Annonce";
  id: string;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateAnnonceSubscription = {
  __typename: "Annonce";
  id: string;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteAnnonceSubscription = {
  __typename: "Annonce";
  id: string;
  title: string;
  text?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  photos?: Array<string | null> | null;
  type?: AnnonceType | null;
  location?: string | null;
  status?: AnnonceStatus | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAnnonce(
    input: CreateAnnonceInput,
    condition?: ModelAnnonceConditionInput
  ): Promise<CreateAnnonceMutation> {
    const statement = `mutation CreateAnnonce($input: CreateAnnonceInput!, $condition: ModelAnnonceConditionInput) {
        createAnnonce(input: $input, condition: $condition) {
          __typename
          id
          title
          text
          contactName
          contactEmail
          contactPhone
          createdAt
          updatedAt
          deletedAt
          photos
          type
          location
          status
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAnnonceMutation>response.data.createAnnonce;
  }
  async UpdateAnnonce(
    input: UpdateAnnonceInput,
    condition?: ModelAnnonceConditionInput
  ): Promise<UpdateAnnonceMutation> {
    const statement = `mutation UpdateAnnonce($input: UpdateAnnonceInput!, $condition: ModelAnnonceConditionInput) {
        updateAnnonce(input: $input, condition: $condition) {
          __typename
          id
          title
          text
          contactName
          contactEmail
          contactPhone
          createdAt
          updatedAt
          deletedAt
          photos
          type
          location
          status
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAnnonceMutation>response.data.updateAnnonce;
  }
  async DeleteAnnonce(
    input: DeleteAnnonceInput,
    condition?: ModelAnnonceConditionInput
  ): Promise<DeleteAnnonceMutation> {
    const statement = `mutation DeleteAnnonce($input: DeleteAnnonceInput!, $condition: ModelAnnonceConditionInput) {
        deleteAnnonce(input: $input, condition: $condition) {
          __typename
          id
          title
          text
          contactName
          contactEmail
          contactPhone
          createdAt
          updatedAt
          deletedAt
          photos
          type
          location
          status
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAnnonceMutation>response.data.deleteAnnonce;
  }
  async GetAnnonce(id: string): Promise<GetAnnonceQuery> {
    const statement = `query GetAnnonce($id: ID!) {
        getAnnonce(id: $id) {
          __typename
          id
          title
          text
          contactName
          contactEmail
          contactPhone
          createdAt
          updatedAt
          deletedAt
          photos
          type
          location
          status
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAnnonceQuery>response.data.getAnnonce;
  }
  async ListAnnonces(
    filter?: ModelAnnonceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAnnoncesQuery> {
    const statement = `query ListAnnonces($filter: ModelAnnonceFilterInput, $limit: Int, $nextToken: String) {
        listAnnonces(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            text
            contactName
            contactEmail
            contactPhone
            createdAt
            updatedAt
            deletedAt
            photos
            type
            location
            status
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAnnoncesQuery>response.data.listAnnonces;
  }
  async SyncAnnonces(
    filter?: ModelAnnonceFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAnnoncesQuery> {
    const statement = `query SyncAnnonces($filter: ModelAnnonceFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAnnonces(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            title
            text
            contactName
            contactEmail
            contactPhone
            createdAt
            updatedAt
            deletedAt
            photos
            type
            location
            status
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAnnoncesQuery>response.data.syncAnnonces;
  }
  async AnnoncesByStatus(
    status: AnnonceStatus,
    sortDirection?: ModelSortDirection,
    filter?: ModelAnnonceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AnnoncesByStatusQuery> {
    const statement = `query AnnoncesByStatus($status: AnnonceStatus!, $sortDirection: ModelSortDirection, $filter: ModelAnnonceFilterInput, $limit: Int, $nextToken: String) {
        annoncesByStatus(status: $status, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            text
            contactName
            contactEmail
            contactPhone
            createdAt
            updatedAt
            deletedAt
            photos
            type
            location
            status
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      status
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AnnoncesByStatusQuery>response.data.annoncesByStatus;
  }
  OnCreateAnnonceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAnnonce">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAnnonce {
        onCreateAnnonce {
          __typename
          id
          title
          text
          contactName
          contactEmail
          contactPhone
          createdAt
          updatedAt
          deletedAt
          photos
          type
          location
          status
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAnnonce">>
  >;

  OnUpdateAnnonceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAnnonce">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAnnonce {
        onUpdateAnnonce {
          __typename
          id
          title
          text
          contactName
          contactEmail
          contactPhone
          createdAt
          updatedAt
          deletedAt
          photos
          type
          location
          status
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAnnonce">>
  >;

  OnDeleteAnnonceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAnnonce">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAnnonce {
        onDeleteAnnonce {
          __typename
          id
          title
          text
          contactName
          contactEmail
          contactPhone
          createdAt
          updatedAt
          deletedAt
          photos
          type
          location
          status
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAnnonce">>
  >;
}
