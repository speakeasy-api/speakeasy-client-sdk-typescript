import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// EmbedToken
/** 
 * A representation of an embed token granted for working with Speakeasy components.
**/
export class EmbedToken extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  createdBy: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "expires_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expiresAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_used" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUsed?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "revoked_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  revokedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "revoked_by" })
  revokedBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}