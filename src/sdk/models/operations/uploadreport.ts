/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class File extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=file" })
    fileName: string;
}

/**
 * The report file to upload provided as a multipart/form-data file segment.
 */
export class UploadReportRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, name=data;json=true" })
    data: shared.Report;

    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    file: File;
}

/**
 * OK
 */
export class UploadReportUploadedReport extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}

export class UploadReportResponse extends SpeakeasyBase {
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
    uploadedReport?: UploadReportUploadedReport;
}
