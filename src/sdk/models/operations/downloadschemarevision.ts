/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class DownloadSchemaRevisionRequest extends SpeakeasyBase {
    /**
     * The ID of the Api to retrieve schemas for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
    apiID: string;

    /**
     * The revision ID of the schema to retrieve.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionID" })
    revisionID: string;

    /**
     * The version ID of the Api to delete metadata for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
    versionID: string;
}

export class DownloadSchemaRevisionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonSchema?: Uint8Array;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationXYamlSchema?: Uint8Array;

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
    rawResponse?: AxiosResponse;
}
