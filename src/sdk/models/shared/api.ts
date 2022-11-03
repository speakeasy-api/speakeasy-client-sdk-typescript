import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class Api extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_id" })
  apiId: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=matched" })
  matched?: boolean;

  @Metadata({ data: "json, name=meta_data" })
  metaData?: Map<string, string[]>;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: string;

  @Metadata({ data: "json, name=version_id" })
  versionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
