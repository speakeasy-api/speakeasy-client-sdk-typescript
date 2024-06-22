/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class Auth extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "header" })
    header: string;

    @SpeakeasyMetadata()
    @Expose({ name: "secret" })
    secret: string;
}

/**
 * A document referenced by a workflow
 */
export class WorkflowDocument extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "auth" })
    @Type(() => Auth)
    auth?: Auth;

    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    location: string;
}
