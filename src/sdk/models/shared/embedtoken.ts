import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";



// EmbedToken
/** 
 * A representation of an embed token granted for working with Speakeasy components.
**/
export class EmbedToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @Metadata({ data: "json, name=filters" })
  filters: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=last_used" })
  lastUsed?: Date;

  @Metadata({ data: "json, name=revoked_at" })
  revokedAt?: Date;

  @Metadata({ data: "json, name=revoked_by" })
  revokedBy?: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
