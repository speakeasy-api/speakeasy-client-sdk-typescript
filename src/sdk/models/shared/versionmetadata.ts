/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * A set of keys and associated values, attached to a particular version of an Api.
 */
export class VersionMetadataInput extends SpeakeasyBase {
  /**
   * The key for this metadata.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "meta_key" })
  metaKey: string;

  /**
   * One of the values for this metadata.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "meta_value" })
  metaValue: string;
}

/**
 * A set of keys and associated values, attached to a particular version of an Api.
 */
export class VersionMetadata extends SpeakeasyBase {
  /**
   * The ID of the Api this Metadata belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "api_id" })
  apiId: string;

  /**
   * Creation timestamp.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * The key for this metadata.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "meta_key" })
  metaKey: string;

  /**
   * One of the values for this metadata.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "meta_value" })
  metaValue: string;

  /**
   * The version ID of the Api this Metadata belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version_id" })
  versionId: string;

  /**
   * The workspace ID this Metadata belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}
