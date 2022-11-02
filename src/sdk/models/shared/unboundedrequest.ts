import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class UnboundedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  CreatedAt: string;

  @Metadata({ data: "json, name=har" })
  Har: string;

  @Metadata({ data: "json, name=har_size_bytes" })
  HarSizeBytes: number;

  @Metadata({ data: "json, name=request_id" })
  RequestId: string;

  @Metadata({ data: "json, name=workspace_id" })
  WorkspaceId: string;
}
