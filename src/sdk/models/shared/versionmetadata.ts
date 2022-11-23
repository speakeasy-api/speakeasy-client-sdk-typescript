import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VersionMetadataInput
/** 
 * A set of keys and associated values, attached to a particular version of an Api.
**/
export class VersionMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta_key" })
  metaKey: string;

  @SpeakeasyMetadata({ data: "json, name=meta_value" })
  metaValue: string;
}


// VersionMetadata
/** 
 * A set of keys and associated values, attached to a particular version of an Api.
**/
export class VersionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_id" })
  apiId: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=meta_key" })
  metaKey: string;

  @SpeakeasyMetadata({ data: "json, name=meta_value" })
  metaValue: string;

  @SpeakeasyMetadata({ data: "json, name=version_id" })
  versionId: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
