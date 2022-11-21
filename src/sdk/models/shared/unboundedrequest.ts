import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnboundedRequest
/** 
 * An UnboundedRequest represents the HAR content capture by Speakeasy when logging a request.
**/
export class UnboundedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=har" })
  har: string;

  @SpeakeasyMetadata({ data: "json, name=har_size_bytes" })
  harSizeBytes: number;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
