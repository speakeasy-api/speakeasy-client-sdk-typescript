import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// Schema
/** 
 * A Schema represents an API schema for a particular Api and Version.
**/
export class Schema extends SpeakeasyBase {
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
  @Expose({ name: "revision_id" })
  revisionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version_id" })
  versionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}