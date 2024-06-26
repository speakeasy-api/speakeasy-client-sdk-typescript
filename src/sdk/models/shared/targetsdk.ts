/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InteractionType } from "./interactiontype";
import { Expose, Transform } from "class-transformer";

export class TargetSDK extends SpeakeasyBase {
    /**
     * Remote commit ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "commit_head" })
    commitHead?: string;

    /**
     * Name of the CI environment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "continuous_integration_environment" })
    continuousIntegrationEnvironment?: string;

    /**
     * Error message if the last event was not successful.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    /**
     * Version of the generated target (post generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_post_version" })
    generateConfigPostVersion?: string;

    /**
     * Eligible feature set during generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_eligible_features" })
    generateEligibleFeatures?: string;

    /**
     * gen.lock ID (expected to be a uuid). The same as `id`. A unique identifier for the target.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_id" })
    generateGenLockId: string;

    /**
     * Features prior to generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_features" })
    generateGenLockPreFeatures?: string;

    /**
     * Artifact version for the Previous Generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_version" })
    generateGenLockPreVersion?: string;

    /**
     * The number of operations ignored in generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_number_of_operations_ignored" })
    generateNumberOfOperationsIgnored?: number;

    /**
     * The number of operations used in generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_number_of_operations_used" })
    generateNumberOfOperationsUsed?: number;

    /**
     * Indicates whether the target was considered published.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_published" })
    generatePublished?: boolean;

    /**
     * eg `typescript`, `terraform`, `python`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_target" })
    generateTarget: string;

    /**
     * The workflow name of the target.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_target_name" })
    generateTargetName?: string;

    /**
     * The version of the Speakeasy generator for this target eg v2 of the typescript generator.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_target_version" })
    generateTargetVersion?: string;

    /**
     * GitHub organization of the action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_organization" })
    ghActionOrganization?: string;

    /**
     * GitHub Action ref value.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_ref" })
    ghActionRef?: string;

    /**
     * GitHub repository of the action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_repository" })
    ghActionRepository?: string;

    /**
     * Link to the GitHub action run.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_run_link" })
    ghActionRunLink?: string;

    /**
     * Version of the GitHub action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_version" })
    ghActionVersion?: string;

    /**
     * Current working directory relative to the git root.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_relative_cwd" })
    gitRelativeCwd?: string;

    /**
     * Default owner for git remote.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_remote_default_owner" })
    gitRemoteDefaultOwner?: string;

    /**
     * Default repository name for git remote.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_remote_default_repo" })
    gitRemoteDefaultRepo?: string;

    /**
     * User email from git configuration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_user_email" })
    gitUserEmail?: string;

    /**
     * User's name from git configuration. (not GitHub username)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_user_name" })
    gitUserName?: string;

    /**
     * Remote hostname.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hostname" })
    hostname?: string;

    /**
     * Unique identifier of the target the same as `generate_gen_lock_id`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Timestamp when the event was created in the database.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_event_created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    lastEventCreatedAt: Date;

    /**
     * Unique identifier of the last event for the target
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_event_id" })
    lastEventId: string;

    /**
     * Type of interaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_event_interaction_type" })
    lastEventInteractionType: InteractionType;

    /**
     * Label of the git repository.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "repo_label" })
    repoLabel?: string;

    /**
     * The blob digest of the source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_blob_digest" })
    sourceBlobDigest?: string;

    /**
     * The namespace name of the source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_namespace_name" })
    sourceNamespaceName?: string;

    /**
     * The revision digest of the source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_revision_digest" })
    sourceRevisionDigest?: string;

    /**
     * Indicates whether the event was successful.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success?: boolean;

    /**
     * Workflow file (post execution)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow_post_raw" })
    workflowPostRaw?: string;

    /**
     * Workflow file (prior to execution)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow_pre_raw" })
    workflowPreRaw?: string;
}
