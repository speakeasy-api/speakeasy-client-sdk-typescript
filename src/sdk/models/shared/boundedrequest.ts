import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class BoundedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_endpoint_id" })
  ApiEndpointId: string;

  @Metadata({ data: "json, name=api_id" })
  ApiId: string;

  @Metadata({ data: "json, name=created_at" })
  CreatedAt: string;

  @Metadata({ data: "json, name=customer_id" })
  CustomerId: string;

  @Metadata({ data: "json, name=latency" })
  Latency: number;

  @Metadata({ data: "json, name=metadata" })
  Metadata?: Map<string, string[]>;

  @Metadata({ data: "json, name=method" })
  Method: string;

  @Metadata({ data: "json, name=path" })
  Path: string;

  @Metadata({ data: "json, name=request_finish_time" })
  RequestFinishTime: string;

  @Metadata({ data: "json, name=request_id" })
  RequestId: string;

  @Metadata({ data: "json, name=request_start_time" })
  RequestStartTime: string;

  @Metadata({ data: "json, name=status" })
  Status: number;

  @Metadata({ data: "json, name=version_id" })
  VersionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  WorkspaceId: string;
}
