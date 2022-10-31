import {Metadata} from "../../../internal/utils/utils";

export class UnboundedRequest {
    @Metadata("json, name=created_at")
    CreatedAt: string;
    @Metadata("json, name=har")
    Har: string;
    @Metadata("json, name=har_size_bytes")
    HarSizeBytes: number;
    @Metadata("json, name=request_id")
    RequestId: string;
    @Metadata("json, name=workspace_id")
    WorkspaceId: string;
    
    constructor(CreatedAt: string, Har: string, HarSizeBytes: number, RequestId: string, WorkspaceId: string) {
		this.CreatedAt = CreatedAt;
		this.Har = Har;
		this.HarSizeBytes = HarSizeBytes;
		this.RequestId = RequestId;
		this.WorkspaceId = WorkspaceId;
	}
}



