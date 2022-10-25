import * as shared from "../shared";

export class GetValidEmbedAccessTokensResponse {
  ContentType: string;

  EmbedTokens?: shared.EmbedToken[];

  Error?: shared.Error;

  StatusCode: number;
}
