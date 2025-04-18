/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { SpeakeasyCore } from "../core.js";
import { workspacesCreateToken } from "../funcs/workspacesCreateToken.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../sdk/models/operations/index.js";
import { unwrapAsync } from "../sdk/types/fp.js";
import { useSpeakeasyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type WorkspacesCreateTokenMutationVariables = {
  request: operations.CreateWorkspaceTokenRequest;
  options?: RequestOptions;
};

export type WorkspacesCreateTokenMutationData = void;

/**
 * Create a token for a particular workspace
 */
export function useWorkspacesCreateTokenMutation(
  options?: MutationHookOptions<
    WorkspacesCreateTokenMutationData,
    Error,
    WorkspacesCreateTokenMutationVariables
  >,
): UseMutationResult<
  WorkspacesCreateTokenMutationData,
  Error,
  WorkspacesCreateTokenMutationVariables
> {
  const client = useSpeakeasyContext();
  return useMutation({
    ...buildWorkspacesCreateTokenMutation(client, options),
    ...options,
  });
}

export function mutationKeyWorkspacesCreateToken(): MutationKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "Workspaces",
    "createToken",
  ];
}

export function buildWorkspacesCreateTokenMutation(
  client$: SpeakeasyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: WorkspacesCreateTokenMutationVariables,
  ) => Promise<WorkspacesCreateTokenMutationData>;
} {
  return {
    mutationKey: mutationKeyWorkspacesCreateToken(),
    mutationFn: function workspacesCreateTokenMutationFn({
      request,
      options,
    }): Promise<WorkspacesCreateTokenMutationData> {
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
      return unwrapAsync(workspacesCreateToken(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
