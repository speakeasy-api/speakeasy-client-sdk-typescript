import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// ApiEndpointInput
/** 
 * An ApiEndpoint is a description of an Endpoint for an API.
**/
export class ApiEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "api_endpoint_id" })
  apiEndpointId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "method" })
  method: string;

  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version_id" })
  versionId: string;
}

// ApiEndpoint
/** 
 * An ApiEndpoint is a description of an Endpoint for an API.
**/
export class ApiEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "api_endpoint_id" })
  apiEndpointId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "api_id" })
  apiId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "matched" })
  matched?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "method" })
  method: string;

  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "version_id" })
  versionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}