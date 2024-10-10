/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesCreate } from "../funcs/workspacesCreate.js";
import { workspacesCreateToken } from "../funcs/workspacesCreateToken.js";
import { workspacesDeleteToken } from "../funcs/workspacesDeleteToken.js";
import { workspacesGet } from "../funcs/workspacesGet.js";
import { workspacesGetAll } from "../funcs/workspacesGetAll.js";
import { workspacesGetByID } from "../funcs/workspacesGetByID.js";
import { workspacesGetFeatureFlags } from "../funcs/workspacesGetFeatureFlags.js";
import { workspacesGetSettings } from "../funcs/workspacesGetSettings.js";
import { workspacesGetTeam } from "../funcs/workspacesGetTeam.js";
import { workspacesGetTokens } from "../funcs/workspacesGetTokens.js";
import { workspacesGrantAccess } from "../funcs/workspacesGrantAccess.js";
import { workspacesRevokeAccess } from "../funcs/workspacesRevokeAccess.js";
import { workspacesUpdate } from "../funcs/workspacesUpdate.js";
import { workspacesUpdateSettings } from "../funcs/workspacesUpdateSettings.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Workspaces extends ClientSDK {
  /**
   * Create a workspace
   *
   * @remarks
   * Creates a workspace
   */
  async create(
    request: shared.Workspace,
    options?: RequestOptions,
  ): Promise<operations.CreateWorkspaceResponse> {
    return unwrapAsync(workspacesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a token for a particular workspace
   */
  async createToken(
    request: operations.CreateWorkspaceTokenRequest,
    options?: RequestOptions,
  ): Promise<shared.ErrorT | undefined> {
    return unwrapAsync(workspacesCreateToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a token for a particular workspace
   */
  async deleteToken(
    request: operations.DeleteWorkspaceTokenRequest,
    options?: RequestOptions,
  ): Promise<shared.ErrorT | undefined> {
    return unwrapAsync(workspacesDeleteToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workspace by context
   *
   * @remarks
   * Get information about a particular workspace by context.
   */
  async get(
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceByContextResponse> {
    return unwrapAsync(workspacesGet(
      this,
      options,
    ));
  }

  /**
   * Get workspaces for a user
   *
   * @remarks
   * Returns a list of workspaces a user has access too
   */
  async getAll(
    options?: RequestOptions,
  ): Promise<operations.GetWorkspacesResponse> {
    return unwrapAsync(workspacesGetAll(
      this,
      options,
    ));
  }

  /**
   * Get workspace
   *
   * @remarks
   * Get information about a particular workspace.
   */
  async getByID(
    request: operations.GetWorkspaceRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceResponse> {
    return unwrapAsync(workspacesGetByID(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workspace feature flags
   */
  async getFeatureFlags(
    request: operations.GetWorkspaceFeatureFlagsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceFeatureFlagsResponse> {
    return unwrapAsync(workspacesGetFeatureFlags(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workspace settings
   *
   * @remarks
   * Get settings about a particular workspace.
   */
  async getSettings(
    request: operations.GetWorkspaceSettingsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceSettingsResponse> {
    return unwrapAsync(workspacesGetSettings(
      this,
      request,
      options,
    ));
  }

  /**
   * Get team members for a particular workspace
   */
  async getTeam(
    request: operations.GetWorkspaceTeamRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceTeamResponse> {
    return unwrapAsync(workspacesGetTeam(
      this,
      request,
      options,
    ));
  }

  /**
   * Get tokens for a particular workspace
   */
  async getTokens(
    request: operations.GetWorkspaceTokensRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceTokensResponse> {
    return unwrapAsync(workspacesGetTokens(
      this,
      request,
      options,
    ));
  }

  /**
   * Grant a user access to a particular workspace
   */
  async grantAccess(
    request: operations.GrantUserAccessToWorkspaceRequest,
    options?: RequestOptions,
  ): Promise<operations.GrantUserAccessToWorkspaceResponse> {
    return unwrapAsync(workspacesGrantAccess(
      this,
      request,
      options,
    ));
  }

  /**
   * Revoke a user's access to a particular workspace
   */
  async revokeAccess(
    request: operations.RevokeUserAccessToWorkspaceRequest,
    options?: RequestOptions,
  ): Promise<shared.ErrorT | undefined> {
    return unwrapAsync(workspacesRevokeAccess(
      this,
      request,
      options,
    ));
  }

  /**
   * Update workspace details
   *
   * @remarks
   * Update information about a particular workspace.
   */
  async update(
    request: operations.UpdateWorkspaceDetailsRequest,
    options?: RequestOptions,
  ): Promise<shared.ErrorT | undefined> {
    return unwrapAsync(workspacesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update workspace settings
   *
   * @remarks
   * Update settings about a particular workspace.
   */
  async updateSettings(
    request: operations.UpdateWorkspaceSettingsRequest,
    options?: RequestOptions,
  ): Promise<shared.ErrorT | undefined> {
    return unwrapAsync(workspacesUpdateSettings(
      this,
      request,
      options,
    ));
  }
}
