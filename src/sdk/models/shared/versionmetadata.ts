import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class VersionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_id" })
  apiId: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=meta_key" })
  metaKey: string;

  @Metadata({ data: "json, name=meta_value" })
  metaValue: string;

  @Metadata({ data: "json, name=version_id" })
  versionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
