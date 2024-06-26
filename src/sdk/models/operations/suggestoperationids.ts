/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class Schema extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=schema" })
    fileName: string;
}

/**
 * The schema file to upload provided as a multipart/form-data file segment.
 */
export class SuggestOperationIDsRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, name=opts;json=true" })
    opts?: shared.SuggestOperationIDsOpts;

    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    schema: Schema;
}

export class SuggestOperationIDsRequest extends SpeakeasyBase {
    /**
     * The schema file to upload provided as a multipart/form-data file segment.
     */
    @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
    requestBody: SuggestOperationIDsRequestBody;

    /**
     * Max number of suggestions to request
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-session-id" })
    xSessionId: string;
}

export class SuggestOperationIDsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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

    /**
     * OK
     */
    @SpeakeasyMetadata()
    suggestedOperationIDs?: shared.SuggestedOperationIDs;
}
