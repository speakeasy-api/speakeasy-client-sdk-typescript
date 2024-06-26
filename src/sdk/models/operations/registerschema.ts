/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class RegisterSchemaFile extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=file" })
    fileName: string;
}

/**
 * The schema file to upload provided as a multipart/form-data file segment.
 */
export class RegisterSchemaRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    file: RegisterSchemaFile;
}

export class RegisterSchemaRequest extends SpeakeasyBase {
    /**
     * The schema file to upload provided as a multipart/form-data file segment.
     */
    @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
    requestBody: RegisterSchemaRequestBody;

    /**
     * The ID of the Api to get the schema for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
    apiID: string;

    /**
     * The version ID of the Api to delete metadata for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
    versionID: string;
}

export class RegisterSchemaResponse extends SpeakeasyBase {
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
