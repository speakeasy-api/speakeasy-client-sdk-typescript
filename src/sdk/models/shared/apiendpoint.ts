import {Metadata} from "../../../internal/utils/utils";

export type ApiEndpoint = {
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
    
}



