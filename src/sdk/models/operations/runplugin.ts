import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class RunPluginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=filters" })
  filters?: shared.Filters;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pluginID",
  })
  pluginID: string;
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

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
