import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// EmbedToken
/** 
 * A representation of an embed token granted for working with Speakeasy components.
**/
export class EmbedToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=last_used" })
  lastUsed?: Date;

  @SpeakeasyMetadata({ data: "json, name=revoked_at" })
  revokedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=revoked_by" })
  revokedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}