/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * An UnboundedRequest represents the HAR content capture by Speakeasy when logging a request.
 */
export class UnboundedRequest extends SpeakeasyBase {
  /**
   * Creation timestamp.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * The HAR content of the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "har" })
  har: string;

  /**
   * The size of the HAR content in bytes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "har_size_bytes" })
  harSizeBytes: number;

  /**
   * The ID of this request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "request_id" })
  requestId: string;

  /**
   * The workspace ID this request was made to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workspace_id" })
  workspaceId: string;
}
