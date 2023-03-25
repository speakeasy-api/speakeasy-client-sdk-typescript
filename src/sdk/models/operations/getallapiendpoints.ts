/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetAllApiEndpointsRequest extends SpeakeasyBase {
  /**
   * The ID of the Api to retrieve ApiEndpoints for.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiID",
  })
  apiID: string;
}

export class GetAllApiEndpointsResponse extends SpeakeasyBase {
  /**
   * OK
   */
  @SpeakeasyMetadata({ elemType: shared.ApiEndpoint })
  apiEndpoints?: shared.ApiEndpoint[];

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Default error response
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
