/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class UpsertApiEndpointRequest extends SpeakeasyBase {
  /**
   * A JSON representation of the ApiEndpoint to upsert.
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiEndpointInput: shared.ApiEndpointInput;

  /**
   * The ID of the ApiEndpoint to upsert.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiEndpointID",
  })
  apiEndpointID: string;

  /**
   * The ID of the Api the ApiEndpoint belongs to.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiID",
  })
  apiID: string;

  /**
   * The version ID of the Api the ApiEndpoint belongs to.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=versionID",
  })
  versionID: string;
}

export class UpsertApiEndpointResponse extends SpeakeasyBase {
  /**
   * OK
   */
  @SpeakeasyMetadata()
  apiEndpoint?: shared.ApiEndpoint;

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
