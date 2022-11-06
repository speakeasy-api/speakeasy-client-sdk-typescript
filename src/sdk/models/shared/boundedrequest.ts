import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BoundedRequest
/** 
 * A BoundedRequest is a request that has been logged by the Speakeasy without the contents of the request.
**/
export class BoundedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_endpoint_id" })
  apiEndpointId: string;

  @Metadata({ data: "json, name=api_id" })
  apiId: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId: string;

  @Metadata({ data: "json, name=latency" })
  latency: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string[]>;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=request_finish_time" })
  requestFinishTime: string;

  @Metadata({ data: "json, name=request_id" })
  requestId: string;

  @Metadata({ data: "json, name=request_start_time" })
  requestStartTime: string;

  @Metadata({ data: "json, name=status" })
  status: number;

  @Metadata({ data: "json, name=version_id" })
  versionId: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
