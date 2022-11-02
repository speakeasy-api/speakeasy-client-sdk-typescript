import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class Api extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_id" })
  ApiId: string;

  @Metadata({ data: "json, name=created_at" })
  CreatedAt: string;

  @Metadata({ data: "json, name=description" })
  Description: string;

  @Metadata({ data: "json, name=matched" })
  Matched?: boolean;

  @Metadata({ data: "json, name=meta_data" })
  MetaData?: Map<string, string[]>;

  @Metadata({ data: "json, name=updated_at" })
  UpdatedAt: string;

  @Metadata({ data: "json, name=version_id" })
  VersionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  WorkspaceId: string;
}
