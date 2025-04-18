/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { SpeakeasyCore } from "../core.js";
import { workspacesSetFeatureFlags } from "../funcs/workspacesSetFeatureFlags.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as shared from "../sdk/models/shared/index.js";
import { unwrapAsync } from "../sdk/types/fp.js";
import { useSpeakeasyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type WorkspacesSetFeatureFlagsMutationVariables = {
  request: shared.WorkspaceFeatureFlagRequest;
  options?: RequestOptions;
};

export type WorkspacesSetFeatureFlagsMutationData =
  shared.WorkspaceFeatureFlagResponse;

/**
 * Set workspace feature flags
 */
export function useWorkspacesSetFeatureFlagsMutation(
  options?: MutationHookOptions<
    WorkspacesSetFeatureFlagsMutationData,
    Error,
    WorkspacesSetFeatureFlagsMutationVariables
  >,
): UseMutationResult<
  WorkspacesSetFeatureFlagsMutationData,
  Error,
  WorkspacesSetFeatureFlagsMutationVariables
> {
  const client = useSpeakeasyContext();
  return useMutation({
    ...buildWorkspacesSetFeatureFlagsMutation(client, options),
    ...options,
  });
}

export function mutationKeyWorkspacesSetFeatureFlags(): MutationKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Workspaces",
    "setFeatureFlags",
  ];
}

export function buildWorkspacesSetFeatureFlagsMutation(
  client$: SpeakeasyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: WorkspacesSetFeatureFlagsMutationVariables,
  ) => Promise<WorkspacesSetFeatureFlagsMutationData>;
} {
  return {
    mutationKey: mutationKeyWorkspacesSetFeatureFlags(),
    mutationFn: function workspacesSetFeatureFlagsMutationFn({
      request,
      options,
    }): Promise<WorkspacesSetFeatureFlagsMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(workspacesSetFeatureFlags(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
