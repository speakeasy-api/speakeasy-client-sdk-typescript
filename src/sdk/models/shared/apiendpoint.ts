import {Metadata} from "../../../internal/utils/utils";

export class ApiEndpoint {
    @Metadata("json, name=api_endpoint_id")
    ApiEndpointId: string;
    @Metadata("json, name=api_id")
    ApiId: string;
    @Metadata("json, name=created_at")
    CreatedAt: string;
    @Metadata("json, name=description")
    Description: string;
    @Metadata("json, name=display_name")
    DisplayName: string;
    @Metadata("json, name=matched")
    Matched?: boolean;
    @Metadata("json, name=method")
    Method: string;
    @Metadata("json, name=path")
    Path: string;
    @Metadata("json, name=updated_at")
    UpdatedAt: string;
    @Metadata("json, name=version_id")
    VersionId: string;
    @Metadata("json, name=workspace_id")
    WorkspaceId: string;
    
    constructor(ApiEndpointId: string, ApiId: string, CreatedAt: string, Description: string, DisplayName: string, Method: string, Path: string, UpdatedAt: string, VersionId: string, WorkspaceId: string, Matched?: boolean) {
		this.ApiEndpointId = ApiEndpointId;
		this.ApiId = ApiId;
		this.CreatedAt = CreatedAt;
		this.Description = Description;
		this.DisplayName = DisplayName;
		this.Matched = Matched;
		this.Method = Method;
		this.Path = Path;
		this.UpdatedAt = UpdatedAt;
		this.VersionId = VersionId;
		this.WorkspaceId = WorkspaceId;
	}
}



