import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class UnboundedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=har" })
  har: string;

  @Metadata({ data: "json, name=har_size_bytes" })
  harSizeBytes: number;

  @Metadata({ data: "json, name=request_id" })
  requestId: string;

  @Metadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
