import { Metadata } from "../../../internal/utils/utils";

export class Api {
  @Metadata("json, name=api_id")
  ApiId: string;
  @Metadata("json, name=created_at")
  CreatedAt: string;
  @Metadata("json, name=description")
  Description: string;
  @Metadata("json, name=matched")
  Matched?: boolean;
  @Metadata("json, name=meta_data")
  MetaData?: Map<string, string[]>;
  @Metadata("json, name=updated_at")
  UpdatedAt: string;
  @Metadata("json, name=version_id")
  VersionId: string;
  @Metadata("json, name=workspace_id")
  WorkspaceId: string;
}
