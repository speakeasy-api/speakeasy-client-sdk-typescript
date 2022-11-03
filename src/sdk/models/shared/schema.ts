import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_id" })
  apiId: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=revision_id" })
  revisionId: string;

  @Metadata({ data: "json, name=version_id" })
  versionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
