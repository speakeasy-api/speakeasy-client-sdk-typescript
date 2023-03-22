/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * A representation of an embed token granted for working with Speakeasy components.
 */
export class EmbedToken extends SpeakeasyBase {
  /**
   * Creation timestamp.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * The ID of the user that created this token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  createdBy: string;

  /**
   * A detailed description of the EmbedToken.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  /**
   * The time this token expires.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expires_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expiresAt: Date;

  /**
   * The filters applied to this token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters: string;

  /**
   * The ID of this EmbedToken.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The last time this token was used.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_used" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUsed?: Date;

  /**
   * The time this token was revoked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "revoked_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  revokedAt?: Date;

  /**
   * The ID of the user that revoked this token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "revoked_by" })
  revokedBy?: string;

  /**
   * The workspace ID this token belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}
