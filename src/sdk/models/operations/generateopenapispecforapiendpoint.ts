/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GenerateOpenApiSpecForApiEndpointRequest extends SpeakeasyBase {
  /**
   * The ID of the ApiEndpoint to generate an OpenAPI specification for.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiEndpointID",
  })
  apiEndpointID: string;

  /**
   * The ID of the Api to generate an OpenAPI specification for.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiID",
  })
  apiID: string;

  /**
   * The version ID of the Api to generate an OpenAPI specification for.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=versionID",
  })
  versionID: string;
}

export class GenerateOpenApiSpecForApiEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Default error response
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  generateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
