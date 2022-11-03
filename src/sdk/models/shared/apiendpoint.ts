import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class ApiEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_endpoint_id" })
  ApiEndpointId: string;

  @Metadata({ data: "json, name=api_id" })
  ApiId: string;

  @Metadata({ data: "json, name=created_at" })
  CreatedAt: string;

  @Metadata({ data: "json, name=description" })
  Description: string;

  @Metadata({ data: "json, name=display_name" })
  DisplayName: string;

  @Metadata({ data: "json, name=matched" })
  Matched?: boolean;

  @Metadata({ data: "json, name=method" })
  Method: string;

  @Metadata({ data: "json, name=path" })
  Path: string;

  @Metadata({ data: "json, name=updated_at" })
  UpdatedAt: string;

  @Metadata({ data: "json, name=version_id" })
  VersionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  WorkspaceId: string;
}
