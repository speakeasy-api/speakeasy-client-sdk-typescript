import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class ApiEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_endpoint_id" })
  apiEndpointId: string;

  @Metadata({ data: "json, name=api_id" })
  apiId: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=display_name" })
  displayName: string;

  @Metadata({ data: "json, name=matched" })
  matched?: boolean;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: string;

  @Metadata({ data: "json, name=version_id" })
  versionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
