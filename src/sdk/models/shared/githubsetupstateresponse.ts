/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Actions = {
  generationActionConfigured: boolean;
  publishActionConfigured: boolean;
};

export type Secrets = {
  apiKeyConfigured: boolean;
  publishingSecretsConfigured: boolean;
};

/**
 * The state of a particular SDK targets github setup
 */
export type GithubSetupStateResponse = {
  actions: Actions;
  appInstalled: boolean;
  secrets: Secrets;
};

/** @internal */
export const Actions$inboundSchema: z.ZodType<Actions, z.ZodTypeDef, unknown> =
  z.object({
    generation_action_configured: z.boolean(),
    publish_action_configured: z.boolean(),
  }).transform((v) => {
    return remap$(v, {
      "generation_action_configured": "generationActionConfigured",
      "publish_action_configured": "publishActionConfigured",
    });
  });

/** @internal */
export type Actions$Outbound = {
  generation_action_configured: boolean;
  publish_action_configured: boolean;
};

/** @internal */
export const Actions$outboundSchema: z.ZodType<
  Actions$Outbound,
  z.ZodTypeDef,
  Actions
> = z.object({
  generationActionConfigured: z.boolean(),
  publishActionConfigured: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    generationActionConfigured: "generation_action_configured",
    publishActionConfigured: "publish_action_configured",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Actions$ {
  /** @deprecated use `Actions$inboundSchema` instead. */
  export const inboundSchema = Actions$inboundSchema;
  /** @deprecated use `Actions$outboundSchema` instead. */
  export const outboundSchema = Actions$outboundSchema;
  /** @deprecated use `Actions$Outbound` instead. */
  export type Outbound = Actions$Outbound;
}

export function actionsToJSON(actions: Actions): string {
  return JSON.stringify(Actions$outboundSchema.parse(actions));
}

export function actionsFromJSON(
  jsonString: string,
): SafeParseResult<Actions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Actions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Actions' from JSON`,
  );
}

/** @internal */
export const Secrets$inboundSchema: z.ZodType<Secrets, z.ZodTypeDef, unknown> =
  z.object({
    api_key_configured: z.boolean(),
    publishing_secrets_configured: z.boolean(),
  }).transform((v) => {
    return remap$(v, {
      "api_key_configured": "apiKeyConfigured",
      "publishing_secrets_configured": "publishingSecretsConfigured",
    });
  });

/** @internal */
export type Secrets$Outbound = {
  api_key_configured: boolean;
  publishing_secrets_configured: boolean;
};

/** @internal */
export const Secrets$outboundSchema: z.ZodType<
  Secrets$Outbound,
  z.ZodTypeDef,
  Secrets
> = z.object({
  apiKeyConfigured: z.boolean(),
  publishingSecretsConfigured: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    apiKeyConfigured: "api_key_configured",
    publishingSecretsConfigured: "publishing_secrets_configured",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Secrets$ {
  /** @deprecated use `Secrets$inboundSchema` instead. */
  export const inboundSchema = Secrets$inboundSchema;
  /** @deprecated use `Secrets$outboundSchema` instead. */
  export const outboundSchema = Secrets$outboundSchema;
  /** @deprecated use `Secrets$Outbound` instead. */
  export type Outbound = Secrets$Outbound;
}

export function secretsToJSON(secrets: Secrets): string {
  return JSON.stringify(Secrets$outboundSchema.parse(secrets));
}

export function secretsFromJSON(
  jsonString: string,
): SafeParseResult<Secrets, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Secrets$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Secrets' from JSON`,
  );
}

/** @internal */
export const GithubSetupStateResponse$inboundSchema: z.ZodType<
  GithubSetupStateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  actions: z.lazy(() => Actions$inboundSchema),
  app_installed: z.boolean(),
  secrets: z.lazy(() => Secrets$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "app_installed": "appInstalled",
  });
});

/** @internal */
export type GithubSetupStateResponse$Outbound = {
  actions: Actions$Outbound;
  app_installed: boolean;
  secrets: Secrets$Outbound;
};

/** @internal */
export const GithubSetupStateResponse$outboundSchema: z.ZodType<
  GithubSetupStateResponse$Outbound,
  z.ZodTypeDef,
  GithubSetupStateResponse
> = z.object({
  actions: z.lazy(() => Actions$outboundSchema),
  appInstalled: z.boolean(),
  secrets: z.lazy(() => Secrets$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    appInstalled: "app_installed",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubSetupStateResponse$ {
  /** @deprecated use `GithubSetupStateResponse$inboundSchema` instead. */
  export const inboundSchema = GithubSetupStateResponse$inboundSchema;
  /** @deprecated use `GithubSetupStateResponse$outboundSchema` instead. */
  export const outboundSchema = GithubSetupStateResponse$outboundSchema;
  /** @deprecated use `GithubSetupStateResponse$Outbound` instead. */
  export type Outbound = GithubSetupStateResponse$Outbound;
}

export function githubSetupStateResponseToJSON(
  githubSetupStateResponse: GithubSetupStateResponse,
): string {
  return JSON.stringify(
    GithubSetupStateResponse$outboundSchema.parse(githubSetupStateResponse),
  );
}

export function githubSetupStateResponseFromJSON(
  jsonString: string,
): SafeParseResult<GithubSetupStateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GithubSetupStateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GithubSetupStateResponse' from JSON`,
  );
}
