/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetLintingReportSignedUrlRequest extends SpeakeasyBase {
    /**
     * The checksum of the document to retrieve the signed access url for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentChecksum" })
    documentChecksum: string;
}

/**
 * OK
 */
export class GetLintingReportSignedUrlSignedAccess extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}

export class GetLintingReportSignedUrlResponse extends SpeakeasyBase {
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
    signedAccess?: GetLintingReportSignedUrlSignedAccess;
}