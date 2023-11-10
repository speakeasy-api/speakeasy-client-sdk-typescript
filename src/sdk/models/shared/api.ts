/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.
 */
export class Api extends SpeakeasyBase {
    /**
     * The ID of this Api. This is a human-readable name (subject to change).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "api_id" })
    apiId: string;

    /**
     * Creation timestamp.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * A detailed description of the Api.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * Determines if all the endpoints within the Api are found in the OpenAPI spec associated with the Api.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "matched" })
    matched?: boolean;

    /**
     * A set of values associated with a meta_data key. This field is only set on get requests.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta_data" })
    metaData?: Record<string, string[]>;

    /**
     * Last update timestamp.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;

    /**
     * The version ID of this Api. This is semantic version identifier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version_id" })
    versionId: string;

    /**
     * The workspace ID this Api belongs to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspace_id" })
    workspaceId: string;
}
