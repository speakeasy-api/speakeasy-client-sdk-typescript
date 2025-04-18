/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { githubCheckAccess } from "../funcs/githubCheckAccess.js";
import { githubCheckPublishingPRs } from "../funcs/githubCheckPublishingPRs.js";
import { githubCheckPublishingSecrets } from "../funcs/githubCheckPublishingSecrets.js";
import { githubConfigureCodeSamples } from "../funcs/githubConfigureCodeSamples.js";
import { githubConfigureMintlifyRepo } from "../funcs/githubConfigureMintlifyRepo.js";
import { githubConfigureTarget } from "../funcs/githubConfigureTarget.js";
import { githubGetAction } from "../funcs/githubGetAction.js";
import { githubGetSetup } from "../funcs/githubGetSetup.js";
import { githubLinkGithub } from "../funcs/githubLinkGithub.js";
import { githubStorePublishingSecrets } from "../funcs/githubStorePublishingSecrets.js";
import { githubTriggerAction } from "../funcs/githubTriggerAction.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Github extends ClientSDK {
  async checkAccess(
    request: operations.CheckGithubAccessRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(githubCheckAccess(
      this,
      request,
      options,
    ));
  }

  async checkPublishingPRs(
    request: operations.GithubCheckPublishingPRsRequest,
    options?: RequestOptions,
  ): Promise<shared.GithubPublishingPRResponse> {
    return unwrapAsync(githubCheckPublishingPRs(
      this,
      request,
      options,
    ));
  }

  async checkPublishingSecrets(
    request: operations.GithubCheckPublishingSecretsRequest,
    options?: RequestOptions,
  ): Promise<shared.GithubMissingPublishingSecretsResponse> {
    return unwrapAsync(githubCheckPublishingSecrets(
      this,
      request,
      options,
    ));
  }

  async configureCodeSamples(
    request: shared.GithubConfigureCodeSamplesRequest,
    options?: RequestOptions,
  ): Promise<shared.GithubConfigureCodeSamplesResponse> {
    return unwrapAsync(githubConfigureCodeSamples(
      this,
      request,
      options,
    ));
  }

  async configureMintlifyRepo(
    request: shared.GithubConfigureMintlifyRepoRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(githubConfigureMintlifyRepo(
      this,
      request,
      options,
    ));
  }

  async configureTarget(
    request: shared.GithubConfigureTargetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(githubConfigureTarget(
      this,
      request,
      options,
    ));
  }

  async getAction(
    request: operations.GetGitHubActionRequest,
    options?: RequestOptions,
  ): Promise<shared.GithubGetActionResponse> {
    return unwrapAsync(githubGetAction(
      this,
      request,
      options,
    ));
  }

  async getSetup(
    request: operations.GetGithubSetupStateRequest,
    options?: RequestOptions,
  ): Promise<shared.GithubSetupStateResponse> {
    return unwrapAsync(githubGetSetup(
      this,
      request,
      options,
    ));
  }

  async linkGithub(
    request: operations.LinkGithubAccessRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(githubLinkGithub(
      this,
      request,
      options,
    ));
  }

  async storePublishingSecrets(
    request: shared.GithubStorePublishingSecretsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(githubStorePublishingSecrets(
      this,
      request,
      options,
    ));
  }

  async triggerAction(
    request: shared.GithubTriggerActionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(githubTriggerAction(
      this,
      request,
      options,
    ));
  }
}
