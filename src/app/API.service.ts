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
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
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
};

export enum AnnonceType {
  OFFER = "OFFER",
  DEMAND = "DEMAND",
  QUESTION = "QUESTION",
  POST = "POST"
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
  comments?: ModelCommentConnection | null;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
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
};

export type DeleteAnnonceInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
};

export type ModelCommentConditionInput = {
  title?: ModelStringInput | null;
  text?: ModelStringInput | null;
  author?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  deletedAt?: ModelIntInput | null;
  annonceID?: ModelIDInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
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

export type UpdateCommentInput = {
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID?: string | null;
};

export type DeleteCommentInput = {
  id: string;
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

export type ModelAnnonceConnection = {
  __typename: "ModelAnnonceConnection";
  items: Array<Annonce | null>;
  nextToken?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  text?: ModelStringInput | null;
  author?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  deletedAt?: ModelIntInput | null;
  annonceID?: ModelIDInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

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
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      title?: string | null;
      text?: string | null;
      author?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      deletedAt?: number | null;
      annonceID: string;
    } | null>;
    nextToken?: string | null;
  } | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      title?: string | null;
      text?: string | null;
      author?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      deletedAt?: number | null;
      annonceID: string;
    } | null>;
    nextToken?: string | null;
  } | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      title?: string | null;
      text?: string | null;
      author?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      deletedAt?: number | null;
      annonceID: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
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
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      title?: string | null;
      text?: string | null;
      author?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      deletedAt?: number | null;
      annonceID: string;
    } | null>;
    nextToken?: string | null;
  } | null;
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
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null>;
  nextToken?: string | null;
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
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
  } | null>;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    title?: string | null;
    text?: string | null;
    author?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deletedAt?: number | null;
    annonceID: string;
  } | null>;
  nextToken?: string | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      title?: string | null;
      text?: string | null;
      author?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      deletedAt?: number | null;
      annonceID: string;
    } | null>;
    nextToken?: string | null;
  } | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      title?: string | null;
      text?: string | null;
      author?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      deletedAt?: number | null;
      annonceID: string;
    } | null>;
    nextToken?: string | null;
  } | null;
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
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      title?: string | null;
      text?: string | null;
      author?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      deletedAt?: number | null;
      annonceID: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  title?: string | null;
  text?: string | null;
  author?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: number | null;
  annonceID: string;
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
          comments {
            __typename
            items {
              __typename
              id
              title
              text
              author
              createdAt
              updatedAt
              deletedAt
              annonceID
            }
            nextToken
          }
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
          comments {
            __typename
            items {
              __typename
              id
              title
              text
              author
              createdAt
              updatedAt
              deletedAt
              annonceID
            }
            nextToken
          }
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
          comments {
            __typename
            items {
              __typename
              id
              title
              text
              author
              createdAt
              updatedAt
              deletedAt
              annonceID
            }
            nextToken
          }
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
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          title
          text
          author
          createdAt
          updatedAt
          deletedAt
          annonceID
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
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          title
          text
          author
          createdAt
          updatedAt
          deletedAt
          annonceID
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
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          title
          text
          author
          createdAt
          updatedAt
          deletedAt
          annonceID
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
    return <DeleteCommentMutation>response.data.deleteComment;
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
          comments {
            __typename
            items {
              __typename
              id
              title
              text
              author
              createdAt
              updatedAt
              deletedAt
              annonceID
            }
            nextToken
          }
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
            comments {
              __typename
              nextToken
            }
          }
          nextToken
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
  async AnnoncesByStatus(
    status: AnnonceStatus,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelAnnonceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AnnoncesByStatusQuery> {
    const statement = `query AnnoncesByStatus($status: AnnonceStatus!, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelAnnonceFilterInput, $limit: Int, $nextToken: String) {
        annoncesByStatus(status: $status, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            comments {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      status
    };
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
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
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          title
          text
          author
          createdAt
          updatedAt
          deletedAt
          annonceID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            text
            author
            createdAt
            updatedAt
            deletedAt
            annonceID
          }
          nextToken
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
    return <ListCommentsQuery>response.data.listComments;
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
          comments {
            __typename
            items {
              __typename
              id
              title
              text
              author
              createdAt
              updatedAt
              deletedAt
              annonceID
            }
            nextToken
          }
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
          comments {
            __typename
            items {
              __typename
              id
              title
              text
              author
              createdAt
              updatedAt
              deletedAt
              annonceID
            }
            nextToken
          }
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
          comments {
            __typename
            items {
              __typename
              id
              title
              text
              author
              createdAt
              updatedAt
              deletedAt
              annonceID
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAnnonce">>
  >;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          title
          text
          author
          createdAt
          updatedAt
          deletedAt
          annonceID
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  >;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          title
          text
          author
          createdAt
          updatedAt
          deletedAt
          annonceID
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  >;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          title
          text
          author
          createdAt
          updatedAt
          deletedAt
          annonceID
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  >;
}
