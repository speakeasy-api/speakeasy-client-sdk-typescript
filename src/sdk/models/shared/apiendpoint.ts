import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";



// ApiEndpoint
/** 
 * An ApiEndpoint is a description of an Endpoint for an API.
**/
export class ApiEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_endpoint_id" })
  apiEndpointId: string;

  @Metadata({ data: "json, name=api_id" })
  apiId: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=display_name" })
  displayName: string;

  @Metadata({ data: "json, name=matched" })
  matched?: boolean;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=version_id" })
  versionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}


// ApiEndpointInput
/** 
 * An ApiEndpoint is a description of an Endpoint for an API.
**/
export class ApiEndpointInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_endpoint_id" })
  apiEndpointId: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=display_name" })
  displayName: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=version_id" })
  versionId: string;
}
