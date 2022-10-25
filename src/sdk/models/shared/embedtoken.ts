import { Metadata } from "../../../internal/utils/utils";

export class EmbedToken {
  @Metadata("json, name=created_at")
  CreatedAt: string;
  @Metadata("json, name=created_by")
  CreatedBy: string;
  @Metadata("json, name=description")
  Description: string;
  @Metadata("json, name=expires_at")
  ExpiresAt: string;
  @Metadata("json, name=filters")
  Filters: string;
  @Metadata("json, name=id")
  Id: string;
  @Metadata("json, name=last_used")
  LastUsed?: string;
  @Metadata("json, name=revoked_at")
  RevokedAt?: string;
  @Metadata("json, name=revoked_by")
  RevokedBy?: string;
  @Metadata("json, name=workspace_id")
  WorkspaceId: string;
}
