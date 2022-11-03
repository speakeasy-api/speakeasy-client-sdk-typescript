import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class EmbedToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=created_by" })
  createdBy: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt: string;

  @Metadata({ data: "json, name=filters" })
  filters: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=last_used" })
  lastUsed?: string;

  @Metadata({ data: "json, name=revoked_at" })
  revokedAt?: string;

  @Metadata({ data: "json, name=revoked_by" })
  revokedBy?: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
