/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSchemasRequest extends SpeakeasyBase {
    /**
     * The ID of the Api to retrieve schemas for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
    apiID: string;

    /**
     * The version ID of the Api to delete metadata for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
    versionID: string;
}

export class GetSchemasResponse extends SpeakeasyBase {
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
    @SpeakeasyMetadata({ elemType: shared.Schema })
    schemata?: shared.Schema[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
