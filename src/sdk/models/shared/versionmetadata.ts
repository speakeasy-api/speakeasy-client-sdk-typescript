import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class VersionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_id" })
  ApiId: string;

  @Metadata({ data: "json, name=created_at" })
  CreatedAt: string;

  @Metadata({ data: "json, name=meta_key" })
  MetaKey: string;

  @Metadata({ data: "json, name=meta_value" })
  MetaValue: string;

  @Metadata({ data: "json, name=version_id" })
  VersionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  WorkspaceId: string;
}
