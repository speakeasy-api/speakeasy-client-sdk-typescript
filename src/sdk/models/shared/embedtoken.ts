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

  constructor(
    CreatedAt: string,
    CreatedBy: string,
    Description: string,
    ExpiresAt: string,
    Filters: string,
    Id: string,
    WorkspaceId: string,
    LastUsed?: string,
    RevokedAt?: string,
    RevokedBy?: string
  ) {
    this.CreatedAt = CreatedAt;
    this.CreatedBy = CreatedBy;
    this.Description = Description;
    this.ExpiresAt = ExpiresAt;
    this.Filters = Filters;
    this.Id = Id;
    this.LastUsed = LastUsed;
    this.RevokedAt = RevokedAt;
    this.RevokedBy = RevokedBy;
    this.WorkspaceId = WorkspaceId;
  }
}
