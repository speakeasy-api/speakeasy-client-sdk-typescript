import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RequestMetadata } from "./requestmetadata";
import { Expose, Transform, Type } from "class-transformer";


// BoundedRequest
/** 
 * A BoundedRequest is a request that has been logged by the Speakeasy without the contents of the request.
**/
export class BoundedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "api_endpoint_id" })
  apiEndpointId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "api_id" })
  apiId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "customer_id" })
  customerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "latency" })
  latency: number;

  @SpeakeasyMetadata({ elemType: RequestMetadata })
  @Expose({ name: "metadata" })
  @Type(() => RequestMetadata)
  metadata?: RequestMetadata[];

  @SpeakeasyMetadata()
  @Expose({ name: "method" })
  method: string;

  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: string;

  @SpeakeasyMetadata()
  @Expose({ name: "request_finish_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestFinishTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "request_id" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "request_start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestStartTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;

  @SpeakeasyMetadata()
  @Expose({ name: "version_id" })
  versionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}