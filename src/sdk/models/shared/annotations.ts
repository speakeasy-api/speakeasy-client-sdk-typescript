/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Annotations
 */
export class Annotations extends SpeakeasyBase {
    /**
     * The authors of the image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.authors" })
    orgOpencontainersImageAuthors?: string;

    /**
     * The time the image was created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.created" })
    orgOpencontainersImageCreated?: string;

    /**
     * Human-readable description of the software packaged in the image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.description" })
    orgOpencontainersImageDescription?: string;

    /**
     * The documentation URL of the image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.documentation" })
    orgOpencontainersImageDocumentation?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.licenses" })
    orgOpencontainersImageLicenses?: string;

    /**
     * Name of the reference for a target
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.ref.name" })
    orgOpencontainersImageRefName?: string;

    /**
     * Source control revision identifier
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.revision" })
    orgOpencontainersImageRevision?: string;

    /**
     * The URL to get source code for building the image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.source" })
    orgOpencontainersImageSource?: string;

    /**
     * Human-readable title of the image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.title" })
    orgOpencontainersImageTitle?: string;

    /**
     * The URL of the image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.url" })
    orgOpencontainersImageUrl?: string;

    /**
     * Name of the distributing entity, organization or individual.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.vendor" })
    orgOpencontainersImageVendor?: string;

    /**
     * The version of the packaged software
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org.opencontainers.image.version" })
    orgOpencontainersImageVersion?: string;
}
