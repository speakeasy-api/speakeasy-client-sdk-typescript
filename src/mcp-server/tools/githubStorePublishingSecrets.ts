/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { githubStorePublishingSecrets } from "../../funcs/githubStorePublishingSecrets.js";
import * as shared from "../../sdk/models/shared/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: shared.GithubStorePublishingSecretsRequest$inboundSchema,
};

export const tool$githubStorePublishingSecrets: ToolDefinition<typeof args> = {
  name: "github-store-publishing-secrets",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await githubStorePublishingSecrets(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
