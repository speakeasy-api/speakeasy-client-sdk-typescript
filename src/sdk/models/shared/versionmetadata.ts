import {Metadata} from "../../../internal/utils/utils";

export type VersionMetadata = {
    @Metadata("json, name=api_id")
    ApiId: string;
    @Metadata("json, name=created_at")
    CreatedAt: string;
    @Metadata("json, name=meta_key")
    MetaKey: string;
    @Metadata("json, name=meta_value")
    MetaValue: string;
    @Metadata("json, name=version_id")
    VersionId: string;
    @Metadata("json, name=workspace_id")
    WorkspaceId: string;
    
}



