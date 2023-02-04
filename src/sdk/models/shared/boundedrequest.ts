import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestMetadata } from "./requestmetadata";



// BoundedRequest
/** 
 * A BoundedRequest is a request that has been logged by the Speakeasy without the contents of the request.
**/
export class BoundedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_endpoint_id" })
  apiEndpointId: string;

  @SpeakeasyMetadata({ data: "json, name=api_id" })
  apiId: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency: number;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: RequestMetadata })
  metadata?: RequestMetadata[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=request_finish_time" })
  requestFinishTime: Date;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=request_start_time" })
  requestStartTime: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=version_id" })
  versionId: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
