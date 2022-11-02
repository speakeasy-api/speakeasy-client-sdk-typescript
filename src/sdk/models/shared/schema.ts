import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_id" })
  ApiId: string;
  @Metadata({ data: "json, name=created_at" })
  CreatedAt: string;
  @Metadata({ data: "json, name=description" })
  Description: string;
  @Metadata({ data: "json, name=revision_id" })
  RevisionId: string;
  @Metadata({ data: "json, name=version_id" })
  VersionId: string;
  @Metadata({ data: "json, name=workspace_id" })
  WorkspaceId: string;
  
}



