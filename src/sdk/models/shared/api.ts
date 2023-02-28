import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// ApiInput
/** 
 * An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.
**/
export class ApiInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "api_id" })
  apiId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta_data" })
  metaData?: Record<string, string[]>;

  @SpeakeasyMetadata()
  @Expose({ name: "version_id" })
  versionId: string;
}

// Api
/** 
 * An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.
**/
export class Api extends SpeakeasyBase {
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
  @Expose({ name: "matched" })
  matched?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "meta_data" })
  metaData?: Record<string, string[]>;

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