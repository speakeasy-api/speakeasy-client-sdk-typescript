/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum OrganizationAccountType {
    Free = "free",
    ScaleUp = "scale-up",
    Enterprise = "enterprise",
}

/**
 * A speakeasy organization
 */
export class Organization extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "account_type" })
    accountType: OrganizationAccountType;

    @SpeakeasyMetadata()
    @Expose({ name: "created)at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}