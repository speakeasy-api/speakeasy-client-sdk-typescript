import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

// UnboundedRequest
/**
 * An UnboundedRequest represents the HAR content capture by Speakeasy when logging a request.
 **/
export class UnboundedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "har" })
  har: string;

  @SpeakeasyMetadata()
  @Expose({ name: "har_size_bytes" })
  harSizeBytes: number;

  @SpeakeasyMetadata()
  @Expose({ name: "request_id" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}
