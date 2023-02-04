import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Plugin
/** 
 * A plugin is a short script that is run against ingested requests
**/
export class Plugin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=eval_hash" })
  evalHash?: string;

  @SpeakeasyMetadata({ data: "json, name=plugin_id" })
  pluginId: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId: string;
}
