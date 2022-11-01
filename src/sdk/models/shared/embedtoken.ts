import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class EmbedToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  CreatedAt: string;
  @Metadata({ data: "json, name=created_by" })
  CreatedBy: string;
  @Metadata({ data: "json, name=description" })
  Description: string;
  @Metadata({ data: "json, name=expires_at" })
  ExpiresAt: string;
  @Metadata({ data: "json, name=filters" })
  Filters: string;
  @Metadata({ data: "json, name=id" })
  Id: string;
  @Metadata({ data: "json, name=last_used" })
  LastUsed?: string;
  @Metadata({ data: "json, name=revoked_at" })
  RevokedAt?: string;
  @Metadata({ data: "json, name=revoked_by" })
  RevokedBy?: string;
  @Metadata({ data: "json, name=workspace_id" })
  WorkspaceId: string;
  
}



