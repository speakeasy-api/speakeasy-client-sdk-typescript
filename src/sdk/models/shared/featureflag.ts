/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * A feature flag is a key-value pair that can be used to enable or disable features.
 */
export class FeatureFlag extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "feature_flag" })
    featureFlag: string;

    @SpeakeasyMetadata()
    @Expose({ name: "trial_ends_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    trialEndsAt?: Date;
}
