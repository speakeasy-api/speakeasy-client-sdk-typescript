/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { SpeakeasyCore } from "../core.js";
import { publishingTokensDelete } from "../funcs/publishingTokensDelete.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../sdk/models/operations/index.js";
import { unwrapAsync } from "../sdk/types/fp.js";
import { useSpeakeasyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PublishingTokensDeleteMutationVariables = {
  request: operations.DeletePublishingTokenRequest;
  options?: RequestOptions;
};

export type PublishingTokensDeleteMutationData = void;

/**
 * Delete a specific publishing token
 *
 * @remarks
 * Delete a particular publishing token.
 */
export function usePublishingTokensDeleteMutation(
  options?: MutationHookOptions<
    PublishingTokensDeleteMutationData,
    Error,
    PublishingTokensDeleteMutationVariables
  >,
): UseMutationResult<
  PublishingTokensDeleteMutationData,
  Error,
  PublishingTokensDeleteMutationVariables
> {
  const client = useSpeakeasyContext();
  return useMutation({
    ...buildPublishingTokensDeleteMutation(client, options),
    ...options,
  });
}

export function mutationKeyPublishingTokensDelete(): MutationKey {
  return [
    "@speakeasy-api/speakeasy-client-sdk-typescript",
    "PublishingTokens",
    "delete",
  ];
}

export function buildPublishingTokensDeleteMutation(
  client$: SpeakeasyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: PublishingTokensDeleteMutationVariables,
  ) => Promise<PublishingTokensDeleteMutationData>;
} {
  return {
    mutationKey: mutationKeyPublishingTokensDelete(),
    mutationFn: function publishingTokensDeleteMutationFn({
      request,
      options,
    }): Promise<PublishingTokensDeleteMutationData> {
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
      return unwrapAsync(publishingTokensDelete(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
