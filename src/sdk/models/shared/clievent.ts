/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InteractionType } from "./interactiontype";
import { Expose, Transform } from "class-transformer";

/**
 * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
 */
export enum GenerateBumpType {
    Major = "major",
    Minor = "minor",
    Patch = "patch",
    Custom = "custom",
    None = "none",
}

export class CliEvent extends SpeakeasyBase {
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
     * Timestamp when the event was created in the database.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Duration of the event in milliseconds.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration_ms" })
    durationMs?: number;

    /**
     * Unique identifier for each execution of the CLI.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "execution_id" })
    executionId: string;

    /**
     * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_bump_type" })
    generateBumpType?: GenerateBumpType;

    /**
     * Checksum of the configuration file (post generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_post_checksum" })
    generateConfigPostChecksum?: string;

    /**
     * Rendered configuration file (post generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_post_raw" })
    generateConfigPostRaw?: string;

    /**
     * The version of the customer's SDK that we just generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_post_version" })
    generateConfigPostVersion?: string;

    /**
     * Checksum of the configuration file (prior to generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_pre_checksum" })
    generateConfigPreChecksum?: string;

    /**
     * Rendered configuration file (prior to generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_pre_raw" })
    generateConfigPreRaw?: string;

    /**
     * The version of the customer's SDK before we generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_pre_version" })
    generateConfigPreVersion?: string;

    /**
     * gen.lock ID (expected to be a uuid).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_id" })
    generateGenLockId?: string;

    /**
     * Features post generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_post_features" })
    generateGenLockPostFeatures?: string;

    /**
     * Checksum of the Previous Rendered OpenAPI document (prior to generation, via gen lock)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_doc_checksum" })
    generateGenLockPreDocChecksum?: string;

    /**
     * info.Version of the Previous Rendered OpenAPI document (prior to generation, via gen lock)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_doc_version" })
    generateGenLockPreDocVersion?: string;

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
     * Indicates whether tests were output.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_output_tests" })
    generateOutputTests?: boolean;

    /**
     * Indicates whether the target was considered published.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_published" })
    generatePublished?: boolean;

    /**
     * Expected Repo URL, for use in documentation generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_repo_url" })
    generateRepoUrl?: string;

    /**
     * The target of the event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_target" })
    generateTarget?: string;

    /**
     * The version of the target.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_target_version" })
    generateTargetVersion?: string;

    /**
     * Version of the generation logic used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_version" })
    generateVersion?: string;

    /**
     * GitHub organization of the action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_organization" })
    ghActionOrganization?: string;

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
     * Unique identifier for each event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Type of interaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "interaction_type" })
    interactionType: InteractionType;

    /**
     * Timestamp when the event completed, in local time.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "local_completed_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    localCompletedAt?: Date;

    /**
     * Timestamp when the event started, in local time.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "local_started_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    localStartedAt: Date;

    /**
     * Checksum of the currently Rendered OpenAPI document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "management_doc_checksum" })
    managementDocChecksum?: string;

    /**
     * Version taken from info.version field of the Rendered OpenAPI document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "management_doc_version" })
    managementDocVersion?: string;

    /**
     * Name of the published package.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publish_package_name" })
    publishPackageName?: string;

    /**
     * Name of the registry where the package was published.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publish_package_registry_name" })
    publishPackageRegistryName?: string;

    /**
     * URL of the published package.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publish_package_url" })
    publishPackageUrl?: string;

    /**
     * Version of the published package.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publish_package_version" })
    publishPackageVersion?: string;

    /**
     * Full CLI command.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "raw_command" })
    rawCommand?: string;

    /**
     * Label of the git repository.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "repo_label" })
    repoLabel?: string;

    /**
     * Identifier of the Speakeasy API key.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "speakeasy_api_key_name" })
    speakeasyApiKeyName: string;

    /**
     * Version of the Speakeasy CLI.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "speakeasy_version" })
    speakeasyVersion: string;

    /**
     * Indicates whether the event was successful.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success: boolean;

    /**
     * Identifier of the workspace.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspace_id" })
    workspaceId: string;
}
