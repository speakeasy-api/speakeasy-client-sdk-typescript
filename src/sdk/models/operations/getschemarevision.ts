/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSchemaRevisionRequest extends SpeakeasyBase {
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

export class GetSchemaRevisionResponse extends SpeakeasyBase {
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
    schema?: shared.Schema;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
