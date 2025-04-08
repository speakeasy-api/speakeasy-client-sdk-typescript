/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InteractionType,
  InteractionType$inboundSchema,
  InteractionType$outboundSchema,
} from "./interactiontype.js";

/**
 * Bump type of the lock file (calculated semver delta, custom change (manual release), or prerelease/graduate)
 */
export const GenerateBumpType = {
  Major: "major",
  Minor: "minor",
  Patch: "patch",
  Custom: "custom",
  Graduate: "graduate",
  Prerelease: "prerelease",
  None: "none",
} as const;
/**
 * Bump type of the lock file (calculated semver delta, custom change (manual release), or prerelease/graduate)
 */
export type GenerateBumpType = ClosedEnum<typeof GenerateBumpType>;

/**
 * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
 */
export const OpenapiDiffBumpType = {
  Major: "major",
  Minor: "minor",
  Patch: "patch",
  None: "none",
} as const;
/**
 * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
 */
export type OpenapiDiffBumpType = ClosedEnum<typeof OpenapiDiffBumpType>;

export type CliEvent = {
  /**
   * Remote commit ID.
   */
  commitHead?: string | undefined;
  /**
   * Name of the CI environment.
   */
  continuousIntegrationEnvironment?: string | undefined;
  /**
   * Timestamp when the event was created in the database.
   */
  createdAt: Date;
  /**
   * Duration of the event in milliseconds.
   */
  durationMs?: number | undefined;
  /**
   * Error message if the event was not successful.
   */
  error?: string | undefined;
  /**
   * Unique identifier for each execution of the CLI.
   */
  executionId: string;
  /**
   * Bump type of the lock file (calculated semver delta, custom change (manual release), or prerelease/graduate)
   */
  generateBumpType?: GenerateBumpType | undefined;
  /**
   * Checksum of the configuration file (post generation)
   */
  generateConfigPostChecksum?: string | undefined;
  /**
   * Rendered configuration file (post generation)
   */
  generateConfigPostRaw?: string | undefined;
  /**
   * The version of the customer's SDK that we just generated
   */
  generateConfigPostVersion?: string | undefined;
  /**
   * Checksum of the configuration file (prior to generation)
   */
  generateConfigPreChecksum?: string | undefined;
  /**
   * Rendered configuration file (prior to generation)
   */
  generateConfigPreRaw?: string | undefined;
  /**
   * The version of the customer's SDK before we generated
   */
  generateConfigPreVersion?: string | undefined;
  /**
   * Eligible feature set during generation
   */
  generateEligibleFeatures?: string | undefined;
  /**
   * gen.lock ID (expected to be a uuid).
   */
  generateGenLockId?: string | undefined;
  /**
   * Features post generation
   */
  generateGenLockPostFeatures?: string | undefined;
  /**
   * Blob digest of the Previous Generation
   */
  generateGenLockPreBlobDigest?: string | undefined;
  /**
   * Checksum of the Previous Rendered OpenAPI document (prior to generation, via gen lock)
   */
  generateGenLockPreDocChecksum?: string | undefined;
  /**
   * info.Version of the Previous Rendered OpenAPI document (prior to generation, via gen lock)
   */
  generateGenLockPreDocVersion?: string | undefined;
  /**
   * Features prior to generation
   */
  generateGenLockPreFeatures?: string | undefined;
  /**
   * Namespace name of the Previous Generation
   */
  generateGenLockPreNamespaceName?: string | undefined;
  /**
   * Revision digest of the Previous Generation
   */
  generateGenLockPreRevisionDigest?: string | undefined;
  /**
   * Artifact version for the Previous Generation
   */
  generateGenLockPreVersion?: string | undefined;
  /**
   * The number of operations ignored in generation.
   */
  generateNumberOfOperationsIgnored?: number | undefined;
  /**
   * The number of operations used in generation.
   */
  generateNumberOfOperationsUsed?: number | undefined;
  /**
   * The number of terraform resources used in generation.
   */
  generateNumberOfTerraformResources?: number | undefined;
  /**
   * Indicates whether tests were output.
   */
  generateOutputTests?: boolean | undefined;
  /**
   * Indicates whether the target was considered published.
   */
  generatePublished?: boolean | undefined;
  /**
   * Expected Repo URL, for use in documentation generation.
   */
  generateRepoUrl?: string | undefined;
  /**
   * The target of the event.
   */
  generateTarget?: string | undefined;
  /**
   * The workflow name of the target.
   */
  generateTargetName?: string | undefined;
  /**
   * The version of the target.
   */
  generateTargetVersion?: string | undefined;
  /**
   * Version of the generation logic used.
   */
  generateVersion?: string | undefined;
  /**
   * GitHub organization of the action.
   */
  ghActionOrganization?: string | undefined;
  /**
   * GitHub Action ref value.
   */
  ghActionRef?: string | undefined;
  /**
   * GitHub repository of the action.
   */
  ghActionRepository?: string | undefined;
  /**
   * Link to the GitHub action run.
   */
  ghActionRunLink?: string | undefined;
  /**
   * Version of the GitHub action.
   */
  ghActionVersion?: string | undefined;
  /**
   * Whether or not changes were committed from generation in the Github Action.
   */
  ghChangesCommitted?: boolean | undefined;
  /**
   * The reference to a created pull request URL.
   */
  ghPullRequest?: string | undefined;
  /**
   * Current working directory relative to the git root.
   */
  gitRelativeCwd?: string | undefined;
  /**
   * Default owner for git remote.
   */
  gitRemoteDefaultOwner?: string | undefined;
  /**
   * Default repository name for git remote.
   */
  gitRemoteDefaultRepo?: string | undefined;
  /**
   * User email from git configuration.
   */
  gitUserEmail?: string | undefined;
  /**
   * User's name from git configuration. (not GitHub username)
   */
  gitUserName?: string | undefined;
  /**
   * Remote hostname.
   */
  hostname?: string | undefined;
  /**
   * Unique identifier for each event.
   */
  id: string;
  /**
   * Type of interaction.
   */
  interactionType: InteractionType;
  /**
   * The last step of the event.
   */
  lastStep?: string | undefined;
  /**
   * The checksum of the lint report.
   */
  lintReportDigest?: string | undefined;
  /**
   * The number of errors in the lint report.
   */
  lintReportErrorCount?: number | undefined;
  /**
   * The number of info messages in the lint report.
   */
  lintReportInfoCount?: number | undefined;
  /**
   * The number of warnings in the lint report.
   */
  lintReportWarningCount?: number | undefined;
  /**
   * Timestamp when the event completed, in local time.
   */
  localCompletedAt?: Date | undefined;
  /**
   * Timestamp when the event started, in local time.
   */
  localStartedAt: Date;
  /**
   * Checksum of the currently Rendered OpenAPI document.
   */
  managementDocChecksum?: string | undefined;
  /**
   * Version taken from info.version field of the Rendered OpenAPI document.
   */
  managementDocVersion?: string | undefined;
  /**
   * Mermaid diagram
   */
  mermaidDiagram?: string | undefined;
  /**
   * The blob digest of the base source.
   */
  openapiDiffBaseSourceBlobDigest?: string | undefined;
  /**
   * The namespace name of the base source.
   */
  openapiDiffBaseSourceNamespaceName?: string | undefined;
  /**
   * The revision digest of the base source.
   */
  openapiDiffBaseSourceRevisionDigest?: string | undefined;
  /**
   * The number of breaking changes in the openapi diff report.
   */
  openapiDiffBreakingChangesCount?: number | undefined;
  /**
   * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
   */
  openapiDiffBumpType?: OpenapiDiffBumpType | undefined;
  /**
   * The checksum of the openapi diff report.
   */
  openapiDiffReportDigest?: string | undefined;
  /**
   * Name of the published package.
   */
  publishPackageName?: string | undefined;
  /**
   * Name of the registry where the package was published.
   */
  publishPackageRegistryName?: string | undefined;
  /**
   * URL of the published package.
   */
  publishPackageUrl?: string | undefined;
  /**
   * Version of the published package.
   */
  publishPackageVersion?: string | undefined;
  /**
   * Full CLI command.
   */
  rawCommand?: string | undefined;
  /**
   * Label of the git repository.
   */
  repoLabel?: string | undefined;
  /**
   * The blob digest of the source.
   */
  sourceBlobDigest?: string | undefined;
  /**
   * The namespace name of the source.
   */
  sourceNamespaceName?: string | undefined;
  /**
   * The revision digest of the source.
   */
  sourceRevisionDigest?: string | undefined;
  /**
   * Identifier of the Speakeasy API key.
   */
  speakeasyApiKeyName: string;
  /**
   * Version of the Speakeasy CLI.
   */
  speakeasyVersion: string;
  /**
   * Indicates whether the event was successful.
   */
  success: boolean;
  /**
   * The raw test report xml
   */
  testReportRaw?: string | undefined;
  /**
   * Workflow lock file (post execution)
   */
  workflowLockPostRaw?: string | undefined;
  /**
   * Workflow lock file (prior to execution)
   */
  workflowLockPreRaw?: string | undefined;
  /**
   * Workflow file (post execution)
   */
  workflowPostRaw?: string | undefined;
  /**
   * Workflow file (prior to execution)
   */
  workflowPreRaw?: string | undefined;
  /**
   * Identifier of the workspace.
   */
  workspaceId: string;
};

/** @internal */
export const GenerateBumpType$inboundSchema: z.ZodNativeEnum<
  typeof GenerateBumpType
> = z.nativeEnum(GenerateBumpType);

/** @internal */
export const GenerateBumpType$outboundSchema: z.ZodNativeEnum<
  typeof GenerateBumpType
> = GenerateBumpType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateBumpType$ {
  /** @deprecated use `GenerateBumpType$inboundSchema` instead. */
  export const inboundSchema = GenerateBumpType$inboundSchema;
  /** @deprecated use `GenerateBumpType$outboundSchema` instead. */
  export const outboundSchema = GenerateBumpType$outboundSchema;
}

/** @internal */
export const OpenapiDiffBumpType$inboundSchema: z.ZodNativeEnum<
  typeof OpenapiDiffBumpType
> = z.nativeEnum(OpenapiDiffBumpType);

/** @internal */
export const OpenapiDiffBumpType$outboundSchema: z.ZodNativeEnum<
  typeof OpenapiDiffBumpType
> = OpenapiDiffBumpType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenapiDiffBumpType$ {
  /** @deprecated use `OpenapiDiffBumpType$inboundSchema` instead. */
  export const inboundSchema = OpenapiDiffBumpType$inboundSchema;
  /** @deprecated use `OpenapiDiffBumpType$outboundSchema` instead. */
  export const outboundSchema = OpenapiDiffBumpType$outboundSchema;
}

/** @internal */
export const CliEvent$inboundSchema: z.ZodType<
  CliEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  commit_head: z.string().optional(),
  continuous_integration_environment: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  duration_ms: z.number().int().optional(),
  error: z.string().optional(),
  execution_id: z.string(),
  generate_bump_type: GenerateBumpType$inboundSchema.optional(),
  generate_config_post_checksum: z.string().optional(),
  generate_config_post_raw: z.string().optional(),
  generate_config_post_version: z.string().optional(),
  generate_config_pre_checksum: z.string().optional(),
  generate_config_pre_raw: z.string().optional(),
  generate_config_pre_version: z.string().optional(),
  generate_eligible_features: z.string().optional(),
  generate_gen_lock_id: z.string().optional(),
  generate_gen_lock_post_features: z.string().optional(),
  generate_gen_lock_pre_blob_digest: z.string().optional(),
  generate_gen_lock_pre_doc_checksum: z.string().optional(),
  generate_gen_lock_pre_doc_version: z.string().optional(),
  generate_gen_lock_pre_features: z.string().optional(),
  generate_gen_lock_pre_namespace_name: z.string().optional(),
  generate_gen_lock_pre_revision_digest: z.string().optional(),
  generate_gen_lock_pre_version: z.string().optional(),
  generate_number_of_operations_ignored: z.number().int().optional(),
  generate_number_of_operations_used: z.number().int().optional(),
  generate_number_of_terraform_resources: z.number().int().optional(),
  generate_output_tests: z.boolean().optional(),
  generate_published: z.boolean().optional(),
  generate_repo_url: z.string().optional(),
  generate_target: z.string().optional(),
  generate_target_name: z.string().optional(),
  generate_target_version: z.string().optional(),
  generate_version: z.string().optional(),
  gh_action_organization: z.string().optional(),
  gh_action_ref: z.string().optional(),
  gh_action_repository: z.string().optional(),
  gh_action_run_link: z.string().optional(),
  gh_action_version: z.string().optional(),
  gh_changes_committed: z.boolean().optional(),
  gh_pull_request: z.string().optional(),
  git_relative_cwd: z.string().optional(),
  git_remote_default_owner: z.string().optional(),
  git_remote_default_repo: z.string().optional(),
  git_user_email: z.string().optional(),
  git_user_name: z.string().optional(),
  hostname: z.string().optional(),
  id: z.string(),
  interaction_type: InteractionType$inboundSchema,
  last_step: z.string().optional(),
  lint_report_digest: z.string().optional(),
  lint_report_error_count: z.number().int().optional(),
  lint_report_info_count: z.number().int().optional(),
  lint_report_warning_count: z.number().int().optional(),
  local_completed_at: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  local_started_at: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  management_doc_checksum: z.string().optional(),
  management_doc_version: z.string().optional(),
  mermaid_diagram: z.string().optional(),
  openapi_diff_base_source_blob_digest: z.string().optional(),
  openapi_diff_base_source_namespace_name: z.string().optional(),
  openapi_diff_base_source_revision_digest: z.string().optional(),
  openapi_diff_breaking_changes_count: z.number().int().optional(),
  openapi_diff_bump_type: OpenapiDiffBumpType$inboundSchema.optional(),
  openapi_diff_report_digest: z.string().optional(),
  publish_package_name: z.string().optional(),
  publish_package_registry_name: z.string().optional(),
  publish_package_url: z.string().optional(),
  publish_package_version: z.string().optional(),
  raw_command: z.string().optional(),
  repo_label: z.string().optional(),
  source_blob_digest: z.string().optional(),
  source_namespace_name: z.string().optional(),
  source_revision_digest: z.string().optional(),
  speakeasy_api_key_name: z.string(),
  speakeasy_version: z.string(),
  success: z.boolean(),
  test_report_raw: z.string().optional(),
  workflow_lock_post_raw: z.string().optional(),
  workflow_lock_pre_raw: z.string().optional(),
  workflow_post_raw: z.string().optional(),
  workflow_pre_raw: z.string().optional(),
  workspace_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "commit_head": "commitHead",
    "continuous_integration_environment": "continuousIntegrationEnvironment",
    "created_at": "createdAt",
    "duration_ms": "durationMs",
    "execution_id": "executionId",
    "generate_bump_type": "generateBumpType",
    "generate_config_post_checksum": "generateConfigPostChecksum",
    "generate_config_post_raw": "generateConfigPostRaw",
    "generate_config_post_version": "generateConfigPostVersion",
    "generate_config_pre_checksum": "generateConfigPreChecksum",
    "generate_config_pre_raw": "generateConfigPreRaw",
    "generate_config_pre_version": "generateConfigPreVersion",
    "generate_eligible_features": "generateEligibleFeatures",
    "generate_gen_lock_id": "generateGenLockId",
    "generate_gen_lock_post_features": "generateGenLockPostFeatures",
    "generate_gen_lock_pre_blob_digest": "generateGenLockPreBlobDigest",
    "generate_gen_lock_pre_doc_checksum": "generateGenLockPreDocChecksum",
    "generate_gen_lock_pre_doc_version": "generateGenLockPreDocVersion",
    "generate_gen_lock_pre_features": "generateGenLockPreFeatures",
    "generate_gen_lock_pre_namespace_name": "generateGenLockPreNamespaceName",
    "generate_gen_lock_pre_revision_digest": "generateGenLockPreRevisionDigest",
    "generate_gen_lock_pre_version": "generateGenLockPreVersion",
    "generate_number_of_operations_ignored":
      "generateNumberOfOperationsIgnored",
    "generate_number_of_operations_used": "generateNumberOfOperationsUsed",
    "generate_number_of_terraform_resources":
      "generateNumberOfTerraformResources",
    "generate_output_tests": "generateOutputTests",
    "generate_published": "generatePublished",
    "generate_repo_url": "generateRepoUrl",
    "generate_target": "generateTarget",
    "generate_target_name": "generateTargetName",
    "generate_target_version": "generateTargetVersion",
    "generate_version": "generateVersion",
    "gh_action_organization": "ghActionOrganization",
    "gh_action_ref": "ghActionRef",
    "gh_action_repository": "ghActionRepository",
    "gh_action_run_link": "ghActionRunLink",
    "gh_action_version": "ghActionVersion",
    "gh_changes_committed": "ghChangesCommitted",
    "gh_pull_request": "ghPullRequest",
    "git_relative_cwd": "gitRelativeCwd",
    "git_remote_default_owner": "gitRemoteDefaultOwner",
    "git_remote_default_repo": "gitRemoteDefaultRepo",
    "git_user_email": "gitUserEmail",
    "git_user_name": "gitUserName",
    "interaction_type": "interactionType",
    "last_step": "lastStep",
    "lint_report_digest": "lintReportDigest",
    "lint_report_error_count": "lintReportErrorCount",
    "lint_report_info_count": "lintReportInfoCount",
    "lint_report_warning_count": "lintReportWarningCount",
    "local_completed_at": "localCompletedAt",
    "local_started_at": "localStartedAt",
    "management_doc_checksum": "managementDocChecksum",
    "management_doc_version": "managementDocVersion",
    "mermaid_diagram": "mermaidDiagram",
    "openapi_diff_base_source_blob_digest": "openapiDiffBaseSourceBlobDigest",
    "openapi_diff_base_source_namespace_name":
      "openapiDiffBaseSourceNamespaceName",
    "openapi_diff_base_source_revision_digest":
      "openapiDiffBaseSourceRevisionDigest",
    "openapi_diff_breaking_changes_count": "openapiDiffBreakingChangesCount",
    "openapi_diff_bump_type": "openapiDiffBumpType",
    "openapi_diff_report_digest": "openapiDiffReportDigest",
    "publish_package_name": "publishPackageName",
    "publish_package_registry_name": "publishPackageRegistryName",
    "publish_package_url": "publishPackageUrl",
    "publish_package_version": "publishPackageVersion",
    "raw_command": "rawCommand",
    "repo_label": "repoLabel",
    "source_blob_digest": "sourceBlobDigest",
    "source_namespace_name": "sourceNamespaceName",
    "source_revision_digest": "sourceRevisionDigest",
    "speakeasy_api_key_name": "speakeasyApiKeyName",
    "speakeasy_version": "speakeasyVersion",
    "test_report_raw": "testReportRaw",
    "workflow_lock_post_raw": "workflowLockPostRaw",
    "workflow_lock_pre_raw": "workflowLockPreRaw",
    "workflow_post_raw": "workflowPostRaw",
    "workflow_pre_raw": "workflowPreRaw",
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type CliEvent$Outbound = {
  commit_head?: string | undefined;
  continuous_integration_environment?: string | undefined;
  created_at: string;
  duration_ms?: number | undefined;
  error?: string | undefined;
  execution_id: string;
  generate_bump_type?: string | undefined;
  generate_config_post_checksum?: string | undefined;
  generate_config_post_raw?: string | undefined;
  generate_config_post_version?: string | undefined;
  generate_config_pre_checksum?: string | undefined;
  generate_config_pre_raw?: string | undefined;
  generate_config_pre_version?: string | undefined;
  generate_eligible_features?: string | undefined;
  generate_gen_lock_id?: string | undefined;
  generate_gen_lock_post_features?: string | undefined;
  generate_gen_lock_pre_blob_digest?: string | undefined;
  generate_gen_lock_pre_doc_checksum?: string | undefined;
  generate_gen_lock_pre_doc_version?: string | undefined;
  generate_gen_lock_pre_features?: string | undefined;
  generate_gen_lock_pre_namespace_name?: string | undefined;
  generate_gen_lock_pre_revision_digest?: string | undefined;
  generate_gen_lock_pre_version?: string | undefined;
  generate_number_of_operations_ignored?: number | undefined;
  generate_number_of_operations_used?: number | undefined;
  generate_number_of_terraform_resources?: number | undefined;
  generate_output_tests?: boolean | undefined;
  generate_published?: boolean | undefined;
  generate_repo_url?: string | undefined;
  generate_target?: string | undefined;
  generate_target_name?: string | undefined;
  generate_target_version?: string | undefined;
  generate_version?: string | undefined;
  gh_action_organization?: string | undefined;
  gh_action_ref?: string | undefined;
  gh_action_repository?: string | undefined;
  gh_action_run_link?: string | undefined;
  gh_action_version?: string | undefined;
  gh_changes_committed?: boolean | undefined;
  gh_pull_request?: string | undefined;
  git_relative_cwd?: string | undefined;
  git_remote_default_owner?: string | undefined;
  git_remote_default_repo?: string | undefined;
  git_user_email?: string | undefined;
  git_user_name?: string | undefined;
  hostname?: string | undefined;
  id: string;
  interaction_type: string;
  last_step?: string | undefined;
  lint_report_digest?: string | undefined;
  lint_report_error_count?: number | undefined;
  lint_report_info_count?: number | undefined;
  lint_report_warning_count?: number | undefined;
  local_completed_at?: string | undefined;
  local_started_at: string;
  management_doc_checksum?: string | undefined;
  management_doc_version?: string | undefined;
  mermaid_diagram?: string | undefined;
  openapi_diff_base_source_blob_digest?: string | undefined;
  openapi_diff_base_source_namespace_name?: string | undefined;
  openapi_diff_base_source_revision_digest?: string | undefined;
  openapi_diff_breaking_changes_count?: number | undefined;
  openapi_diff_bump_type?: string | undefined;
  openapi_diff_report_digest?: string | undefined;
  publish_package_name?: string | undefined;
  publish_package_registry_name?: string | undefined;
  publish_package_url?: string | undefined;
  publish_package_version?: string | undefined;
  raw_command?: string | undefined;
  repo_label?: string | undefined;
  source_blob_digest?: string | undefined;
  source_namespace_name?: string | undefined;
  source_revision_digest?: string | undefined;
  speakeasy_api_key_name: string;
  speakeasy_version: string;
  success: boolean;
  test_report_raw?: string | undefined;
  workflow_lock_post_raw?: string | undefined;
  workflow_lock_pre_raw?: string | undefined;
  workflow_post_raw?: string | undefined;
  workflow_pre_raw?: string | undefined;
  workspace_id: string;
};

/** @internal */
export const CliEvent$outboundSchema: z.ZodType<
  CliEvent$Outbound,
  z.ZodTypeDef,
  CliEvent
> = z.object({
  commitHead: z.string().optional(),
  continuousIntegrationEnvironment: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()),
  durationMs: z.number().int().optional(),
  error: z.string().optional(),
  executionId: z.string(),
  generateBumpType: GenerateBumpType$outboundSchema.optional(),
  generateConfigPostChecksum: z.string().optional(),
  generateConfigPostRaw: z.string().optional(),
  generateConfigPostVersion: z.string().optional(),
  generateConfigPreChecksum: z.string().optional(),
  generateConfigPreRaw: z.string().optional(),
  generateConfigPreVersion: z.string().optional(),
  generateEligibleFeatures: z.string().optional(),
  generateGenLockId: z.string().optional(),
  generateGenLockPostFeatures: z.string().optional(),
  generateGenLockPreBlobDigest: z.string().optional(),
  generateGenLockPreDocChecksum: z.string().optional(),
  generateGenLockPreDocVersion: z.string().optional(),
  generateGenLockPreFeatures: z.string().optional(),
  generateGenLockPreNamespaceName: z.string().optional(),
  generateGenLockPreRevisionDigest: z.string().optional(),
  generateGenLockPreVersion: z.string().optional(),
  generateNumberOfOperationsIgnored: z.number().int().optional(),
  generateNumberOfOperationsUsed: z.number().int().optional(),
  generateNumberOfTerraformResources: z.number().int().optional(),
  generateOutputTests: z.boolean().optional(),
  generatePublished: z.boolean().optional(),
  generateRepoUrl: z.string().optional(),
  generateTarget: z.string().optional(),
  generateTargetName: z.string().optional(),
  generateTargetVersion: z.string().optional(),
  generateVersion: z.string().optional(),
  ghActionOrganization: z.string().optional(),
  ghActionRef: z.string().optional(),
  ghActionRepository: z.string().optional(),
  ghActionRunLink: z.string().optional(),
  ghActionVersion: z.string().optional(),
  ghChangesCommitted: z.boolean().optional(),
  ghPullRequest: z.string().optional(),
  gitRelativeCwd: z.string().optional(),
  gitRemoteDefaultOwner: z.string().optional(),
  gitRemoteDefaultRepo: z.string().optional(),
  gitUserEmail: z.string().optional(),
  gitUserName: z.string().optional(),
  hostname: z.string().optional(),
  id: z.string(),
  interactionType: InteractionType$outboundSchema,
  lastStep: z.string().optional(),
  lintReportDigest: z.string().optional(),
  lintReportErrorCount: z.number().int().optional(),
  lintReportInfoCount: z.number().int().optional(),
  lintReportWarningCount: z.number().int().optional(),
  localCompletedAt: z.date().transform(v => v.toISOString()).optional(),
  localStartedAt: z.date().transform(v => v.toISOString()),
  managementDocChecksum: z.string().optional(),
  managementDocVersion: z.string().optional(),
  mermaidDiagram: z.string().optional(),
  openapiDiffBaseSourceBlobDigest: z.string().optional(),
  openapiDiffBaseSourceNamespaceName: z.string().optional(),
  openapiDiffBaseSourceRevisionDigest: z.string().optional(),
  openapiDiffBreakingChangesCount: z.number().int().optional(),
  openapiDiffBumpType: OpenapiDiffBumpType$outboundSchema.optional(),
  openapiDiffReportDigest: z.string().optional(),
  publishPackageName: z.string().optional(),
  publishPackageRegistryName: z.string().optional(),
  publishPackageUrl: z.string().optional(),
  publishPackageVersion: z.string().optional(),
  rawCommand: z.string().optional(),
  repoLabel: z.string().optional(),
  sourceBlobDigest: z.string().optional(),
  sourceNamespaceName: z.string().optional(),
  sourceRevisionDigest: z.string().optional(),
  speakeasyApiKeyName: z.string(),
  speakeasyVersion: z.string(),
  success: z.boolean(),
  testReportRaw: z.string().optional(),
  workflowLockPostRaw: z.string().optional(),
  workflowLockPreRaw: z.string().optional(),
  workflowPostRaw: z.string().optional(),
  workflowPreRaw: z.string().optional(),
  workspaceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    commitHead: "commit_head",
    continuousIntegrationEnvironment: "continuous_integration_environment",
    createdAt: "created_at",
    durationMs: "duration_ms",
    executionId: "execution_id",
    generateBumpType: "generate_bump_type",
    generateConfigPostChecksum: "generate_config_post_checksum",
    generateConfigPostRaw: "generate_config_post_raw",
    generateConfigPostVersion: "generate_config_post_version",
    generateConfigPreChecksum: "generate_config_pre_checksum",
    generateConfigPreRaw: "generate_config_pre_raw",
    generateConfigPreVersion: "generate_config_pre_version",
    generateEligibleFeatures: "generate_eligible_features",
    generateGenLockId: "generate_gen_lock_id",
    generateGenLockPostFeatures: "generate_gen_lock_post_features",
    generateGenLockPreBlobDigest: "generate_gen_lock_pre_blob_digest",
    generateGenLockPreDocChecksum: "generate_gen_lock_pre_doc_checksum",
    generateGenLockPreDocVersion: "generate_gen_lock_pre_doc_version",
    generateGenLockPreFeatures: "generate_gen_lock_pre_features",
    generateGenLockPreNamespaceName: "generate_gen_lock_pre_namespace_name",
    generateGenLockPreRevisionDigest: "generate_gen_lock_pre_revision_digest",
    generateGenLockPreVersion: "generate_gen_lock_pre_version",
    generateNumberOfOperationsIgnored: "generate_number_of_operations_ignored",
    generateNumberOfOperationsUsed: "generate_number_of_operations_used",
    generateNumberOfTerraformResources:
      "generate_number_of_terraform_resources",
    generateOutputTests: "generate_output_tests",
    generatePublished: "generate_published",
    generateRepoUrl: "generate_repo_url",
    generateTarget: "generate_target",
    generateTargetName: "generate_target_name",
    generateTargetVersion: "generate_target_version",
    generateVersion: "generate_version",
    ghActionOrganization: "gh_action_organization",
    ghActionRef: "gh_action_ref",
    ghActionRepository: "gh_action_repository",
    ghActionRunLink: "gh_action_run_link",
    ghActionVersion: "gh_action_version",
    ghChangesCommitted: "gh_changes_committed",
    ghPullRequest: "gh_pull_request",
    gitRelativeCwd: "git_relative_cwd",
    gitRemoteDefaultOwner: "git_remote_default_owner",
    gitRemoteDefaultRepo: "git_remote_default_repo",
    gitUserEmail: "git_user_email",
    gitUserName: "git_user_name",
    interactionType: "interaction_type",
    lastStep: "last_step",
    lintReportDigest: "lint_report_digest",
    lintReportErrorCount: "lint_report_error_count",
    lintReportInfoCount: "lint_report_info_count",
    lintReportWarningCount: "lint_report_warning_count",
    localCompletedAt: "local_completed_at",
    localStartedAt: "local_started_at",
    managementDocChecksum: "management_doc_checksum",
    managementDocVersion: "management_doc_version",
    mermaidDiagram: "mermaid_diagram",
    openapiDiffBaseSourceBlobDigest: "openapi_diff_base_source_blob_digest",
    openapiDiffBaseSourceNamespaceName:
      "openapi_diff_base_source_namespace_name",
    openapiDiffBaseSourceRevisionDigest:
      "openapi_diff_base_source_revision_digest",
    openapiDiffBreakingChangesCount: "openapi_diff_breaking_changes_count",
    openapiDiffBumpType: "openapi_diff_bump_type",
    openapiDiffReportDigest: "openapi_diff_report_digest",
    publishPackageName: "publish_package_name",
    publishPackageRegistryName: "publish_package_registry_name",
    publishPackageUrl: "publish_package_url",
    publishPackageVersion: "publish_package_version",
    rawCommand: "raw_command",
    repoLabel: "repo_label",
    sourceBlobDigest: "source_blob_digest",
    sourceNamespaceName: "source_namespace_name",
    sourceRevisionDigest: "source_revision_digest",
    speakeasyApiKeyName: "speakeasy_api_key_name",
    speakeasyVersion: "speakeasy_version",
    testReportRaw: "test_report_raw",
    workflowLockPostRaw: "workflow_lock_post_raw",
    workflowLockPreRaw: "workflow_lock_pre_raw",
    workflowPostRaw: "workflow_post_raw",
    workflowPreRaw: "workflow_pre_raw",
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CliEvent$ {
  /** @deprecated use `CliEvent$inboundSchema` instead. */
  export const inboundSchema = CliEvent$inboundSchema;
  /** @deprecated use `CliEvent$outboundSchema` instead. */
  export const outboundSchema = CliEvent$outboundSchema;
  /** @deprecated use `CliEvent$Outbound` instead. */
  export type Outbound = CliEvent$Outbound;
}

export function cliEventToJSON(cliEvent: CliEvent): string {
  return JSON.stringify(CliEvent$outboundSchema.parse(cliEvent));
}

export function cliEventFromJSON(
  jsonString: string,
): SafeParseResult<CliEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CliEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CliEvent' from JSON`,
  );
}
