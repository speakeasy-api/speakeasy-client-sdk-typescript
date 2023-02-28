import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// VersionMetadataInput
/** 
 * A set of keys and associated values, attached to a particular version of an Api.
**/
export class VersionMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "meta_key" })
  metaKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta_value" })
  metaValue: string;
}

// VersionMetadata
/** 
 * A set of keys and associated values, attached to a particular version of an Api.
**/
export class VersionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "api_id" })
  apiId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "meta_key" })
  metaKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta_value" })
  metaValue: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version_id" })
  versionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}