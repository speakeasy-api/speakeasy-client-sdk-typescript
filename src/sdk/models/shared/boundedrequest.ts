import { Metadata } from "../../../internal/utils/utils";

export class BoundedRequest {
  @Metadata("json, name=api_endpoint_id")
  ApiEndpointId: string;
  @Metadata("json, name=api_id")
  ApiId: string;
  @Metadata("json, name=created_at")
  CreatedAt: string;
  @Metadata("json, name=customer_id")
  CustomerId: string;
  @Metadata("json, name=latency")
  Latency: number;
  @Metadata("json, name=metadata")
  Metadata?: Map<string, string[]>;
  @Metadata("json, name=method")
  Method: string;
  @Metadata("json, name=path")
  Path: string;
  @Metadata("json, name=request_finish_time")
  RequestFinishTime: string;
  @Metadata("json, name=request_id")
  RequestId: string;
  @Metadata("json, name=request_start_time")
  RequestStartTime: string;
  @Metadata("json, name=status")
  Status: number;
  @Metadata("json, name=version_id")
  VersionId: string;
  @Metadata("json, name=workspace_id")
  WorkspaceId: string;
}
