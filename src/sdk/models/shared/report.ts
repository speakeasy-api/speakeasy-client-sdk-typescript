/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum TypeT {
    Linting = "linting",
    Changes = "changes",
}

export class Report extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeT;
}
