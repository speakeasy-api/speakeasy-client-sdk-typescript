/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetManifestRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace_name" })
    namespaceName: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization_slug" })
    organizationSlug: string;

    /**
     * Tag or digest
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revision_reference" })
    revisionReference: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_slug" })
    workspaceSlug: string;
}

export class GetManifestResponse extends SpeakeasyBase {
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
     * OK
     */
    @SpeakeasyMetadata()
    manifest?: shared.Manifest;

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