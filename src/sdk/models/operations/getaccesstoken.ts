/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetAccessTokenRequest extends SpeakeasyBase {
    /**
     * The workspace ID
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace_id" })
    workspaceId: string;
}

export class GetAccessTokenResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    accessToken?: shared.AccessToken;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Default error response
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
