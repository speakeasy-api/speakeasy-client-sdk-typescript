import { Metadata } from "../../../internal/utils/utils";

export class Schema {
  @Metadata("json, name=api_id")
  ApiId: string;
  @Metadata("json, name=created_at")
  CreatedAt: string;
  @Metadata("json, name=description")
  Description: string;
  @Metadata("json, name=revision_id")
  RevisionId: string;
  @Metadata("json, name=version_id")
  VersionId: string;
  @Metadata("json, name=workspace_id")
  WorkspaceId: string;

  constructor(
    ApiId: string,
    CreatedAt: string,
    Description: string,
    RevisionId: string,
    VersionId: string,
    WorkspaceId: string
  ) {
    this.ApiId = ApiId;
    this.CreatedAt = CreatedAt;
    this.Description = Description;
    this.RevisionId = RevisionId;
    this.VersionId = VersionId;
    this.WorkspaceId = WorkspaceId;
  }
}
