import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// ApiEndpointInput
/** 
 * An ApiEndpoint is a description of an Endpoint for an API.
**/
export class ApiEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_endpoint_id" })
  apiEndpointId: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=version_id" })
  versionId: string;
}

// ApiEndpoint
/** 
 * An ApiEndpoint is a description of an Endpoint for an API.
**/
export class ApiEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_endpoint_id" })
  apiEndpointId: string;

  @SpeakeasyMetadata({ data: "json, name=api_id" })
  apiId: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=matched" })
  matched?: boolean;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=version_id" })
  versionId: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}