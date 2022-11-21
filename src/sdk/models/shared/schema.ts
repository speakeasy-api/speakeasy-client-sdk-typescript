import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Schema
/** 
 * A Schema represents an API schema for a particular Api and Version.
**/
export class Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_id" })
  apiId: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=revision_id" })
  revisionId: string;

  @SpeakeasyMetadata({ data: "json, name=version_id" })
  versionId: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
