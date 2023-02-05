import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// ApiInput
/** 
 * An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.
**/
export class ApiInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_id" })
  apiId: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=meta_data" })
  metaData?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=version_id" })
  versionId: string;
}

// Api
/** 
 * An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.
**/
export class Api extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_id" })
  apiId: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=matched" })
  matched?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meta_data" })
  metaData?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=version_id" })
  versionId: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}