import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RunPluginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginID" })
  pluginID: string;
}


export class RunPluginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=filters" })
  filters?: shared.Filters;
}


export class RunPluginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RunPluginPathParams;

  @SpeakeasyMetadata()
  queryParams: RunPluginQueryParams;
}


export class RunPluginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BoundedRequest })
  boundedRequests?: shared.BoundedRequest[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
